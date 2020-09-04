import { SongInterface } from './../songInterface'
import { Injectable } from '@nestjs/common'
import axios, { AxiosInstance } from 'axios'
import { VagalumeResponse } from './vagalumeResponse'
import { VAGALUME_API_URL } from '../../../config/environment'

@Injectable()
export class VagalumeService implements SongInterface {
  private axios: AxiosInstance

  constructor() {
    this.axios = axios.create({
      baseURL: VAGALUME_API_URL
    })
  }

  async getlyric(title: string, artist: string): Promise<string[]> {
    const lyric = await this.axios.get<VagalumeResponse>(`search.php?&art=${artist}&mus=${title}`)

    return lyric.data.mus[0].text.split('\n')
  }
}
