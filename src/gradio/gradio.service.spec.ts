import { Test, TestingModule } from '@nestjs/testing';
import { GradioService } from './gradio.service';

describe('GradioService', () => {
  let service: GradioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GradioService],
    }).compile();

    service = module.get<GradioService>(GradioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
