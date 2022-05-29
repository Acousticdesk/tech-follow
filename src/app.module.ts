import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { VersionService } from './version/version.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [VersionService],
})
export class AppModule {}
