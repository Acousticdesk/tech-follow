import { Injectable } from '@nestjs/common';

@Injectable()
export class VersionService {
  getAppVersion() {
    return process.env.npm_package_version;
  }
}
