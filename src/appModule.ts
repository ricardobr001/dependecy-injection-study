import { Module } from '@nestjs/common'
import { SongModule } from './modules/song/songModule'

@Module({
  imports: [SongModule]
})
export class AppModule {}
