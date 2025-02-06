import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';

@Injectable()
export class DeepseekService {
  private openai: OpenAI;

  constructor() {
    this.openai = new OpenAI({
      baseURL: 'https://api.deepseek.com',
      apiKey: 'sk-0416af374cfd4368964cc830685ef2d5', // 替换为你的 DeepSeek API Key
    });
  }

  async getCompletion(content: string): Promise<string> {
    const completion = await this.openai.chat.completions.create({
      messages: [{ role: 'user', content: content }],
      model: 'deepseek-chat',
    });

    return completion.choices[0].message.content;
  }
}
