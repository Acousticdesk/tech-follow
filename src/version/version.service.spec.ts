import { Test, TestingModule } from '@nestjs/testing';
import { VersionService } from './version.service';

describe('VersionService', () => {
  let service: VersionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VersionService],
    }).compile();

    service = module.get<VersionService>(VersionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getVersion', () => {
    it('should return current app version', () => {
      expect(service.getAppVersion()).toBe('0.0.1');
    });
  });
});
