import { Injectable } from '@nestjs/common';

@Injectable()
export class VersionService {
  // TODO akicha: take a version from package.json
  getAppVersion() {
    return '0.0.1';
  }
}
