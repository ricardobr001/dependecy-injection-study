import { SongInterface } from './../songInterface'
import { Injectable } from '@nestjs/common'
import axios, { AxiosInstance } from 'axios'
import * as Lyricist from 'lyricist'
import { GeniusResponse, Result } from './GeniusResponse'
import { GENIUS_API_URL, GENIUS_API_KEY } from '../../../config/environment'

@Injectable()
export class GeniusService implements SongInterface {
  private axios: AxiosInstance
  private lyricist
  private geniusToken = GENIUS_API_KEY

  constructor() {
    this.lyricist = new Lyricist(this.geniusToken)
    this.axios = axios.create({
      baseURL: GENIUS_API_URL
    })
  }

  async getlyric(title: string, artist: string): Promise<string[]> {
    const geniusId = await this.getSongId(title, artist)

    if (geniusId != -1) {
      const res = await this.lyricist.song(geniusId, {
        fetchLyrics: true
      })

      return res.lyrics.split('\n')
    }

    return '404 NOT FOUND\n¯\\_(ツ)_/¯'.split('\n')
  }

  private async getSongId(title: string, artist: string): Promise<number> {
    const res = await this.axios.get<GeniusResponse>(`/search?q=${title} ${artist}&access_token=${this.geniusToken}`)

    return this.findSongIdByArtistAndTitleOnResponse(res.data.response.hits, artist, title)
  }

  private findSongIdByArtistAndTitleOnResponse(arr: Result[], artist: string, title: string): number {
    const titleLookingFor = this.transformStringToLowerCase(this.replaceQuoteOnSongTitle(title))
    const artistLookingFor = this.transformStringToLowerCase(artist)

    const founded = arr.filter(currentObj =>
      this.compareCurrentObjectToWhatWeAreLookingFor(titleLookingFor, artistLookingFor, currentObj)
    )

    return founded.length > 0 ? founded[0].result.id : -1
  }

  private compareCurrentObjectToWhatWeAreLookingFor(
    titleLookingFor: string,
    artistLookingFor: string,
    obj: Result
  ): boolean {
    if (this.transformStringToLowerCase(obj.result.primary_artist.name) === artistLookingFor) {
      const lowerCase = this.transformStringToLowerCase(obj.result.title)
      const singleQuoteSong = this.replaceQuoteOnSongTitle(lowerCase)

      if (singleQuoteSong === titleLookingFor) {
        return true
      }
    }
    return false
  }

  private transformStringToLowerCase(title: string): string {
    return title.toLowerCase()
  }

  private replaceQuoteOnSongTitle(title: string): string {
    return title.replace(new RegExp('’', 'g'), "'")
  }
}
