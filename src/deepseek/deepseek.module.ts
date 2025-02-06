import { Module } from '@nestjs/common';
import { DeepseekService } from './deepseek.service';
import { DeepseekController } from './deepseek.controller';

@Module({
  providers: [DeepseekService],
  controllers: [DeepseekController],
})
export class DeepseekModule {}
