import { Module } from '@nestjs/common'
import { SongController } from './songController'
import { SongModel } from './songModel'
// import { VagalumeService } from './vagalume/vagalumeService'
import { GeniusService } from './genius/geniusService'

@Module({
  controllers: [SongController],
  providers: [SongModel, GeniusService] //VagalumeService
})
export class SongModule {}
