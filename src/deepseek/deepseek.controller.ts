import { Body, Controller, Post } from '@nestjs/common';
import { DeepseekService } from './deepseek.service';
import { AskQuestionDto } from './deepseek.dto';

@Controller('deepseek')
export class DeepseekController {
  constructor(private readonly deepseekService: DeepseekService) {}

  @Post('completion')
  async getCompletion(@Body() askQuestionDto: AskQuestionDto): Promise<string> {
    return this.deepseekService.getCompletion(askQuestionDto.content);
  }
}
