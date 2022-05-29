import { Controller, Get } from '@nestjs/common';
import { VersionService } from 'src/version/version.service';

@Controller()
export class AppController {
  constructor(private readonly versionService: VersionService) {}

  @Get('version')
  getVersion() {
    return this.versionService.getAppVersion();
  }
}
