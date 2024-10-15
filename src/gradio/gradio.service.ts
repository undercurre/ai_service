import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { importDynamic } from 'src/utils/import';

@Injectable()
export class GradioService implements OnModuleInit, OnModuleDestroy {
  private client;

  async onModuleInit() {
    const { Client } = await importDynamic('@gradio/client');
    this.client = await Client.connect(
      'https://s5k.cn/api/v1/studio/Qwen/Qwen-Math-demo/gradio/',
    );
  }

  onModuleDestroy() {
    this.client.close(); // Assuming there is a close method to clean up the connection
  }

  async predict(image: Buffer, question: string) {
    const result = await this.client.predict('/math_chat_bot', {
      image,
      sketchpad: {
        background: image,
        layers: [],
        composite: null,
      },
      question,
    });

    console.log('请求结果', result);

    return result.data;
  }
}
