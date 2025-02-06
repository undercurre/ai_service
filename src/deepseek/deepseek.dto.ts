import { IsString, IsNotEmpty } from 'class-validator';

export class AskQuestionDto {
  @IsNotEmpty()
  @IsString()
  content: string; // 用户ID
}
