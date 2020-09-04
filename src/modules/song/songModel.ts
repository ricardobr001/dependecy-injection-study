import { Injectable } from '@nestjs/common'
import { GeniusService } from './genius/geniusService'
// import { VagalumeService } from './vagalume/vagalumeService'

@Injectable()
export class SongModel {
  constructor(
    private readonly songService: GeniusService //private readonly songServicee: VagalumeService
  ) {}

  getLyric(title: string, artist: string): Promise<string[]> {
    return this.songService.getlyric(title, artist)
  }
}
