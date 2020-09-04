import { Controller, Get, Query } from '@nestjs/common'
import { SongModel } from './songModel'
import { SongRequest } from './request/songRequest'

@Controller('lyric')
export class SongController {
  constructor(private readonly songModel: SongModel) {}

  @Get()
  getLyric(@Query() query: SongRequest) {
    const { title, artist } = query

    return this.songModel.getLyric(title, artist)
  }
}
