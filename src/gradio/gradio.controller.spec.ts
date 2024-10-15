import { Test, TestingModule } from '@nestjs/testing';
import { GradioController } from './gradio.controller';

describe('GradioController', () => {
  let controller: GradioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GradioController],
    }).compile();

    controller = module.get<GradioController>(GradioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
