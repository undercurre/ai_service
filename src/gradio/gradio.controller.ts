import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
  Body,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { GradioService } from './gradio.service';
import { diskStorage } from 'multer';
import { v4 as uuidv4 } from 'uuid';
import * as path from 'path';
import fs from 'fs';
import { Express } from 'express';

@Controller('gradio')
export class GradioController {
  constructor(private readonly gradioService: GradioService) {}

  @Post('predict')
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: './uploads/math',
        filename: (req, file, cb) => {
          const filename: string = uuidv4() + path.extname(file.originalname);
          cb(null, filename);
        },
      }),
    }),
  )
  async predict(
    @UploadedFile() file: Express.Multer.File,
    @Body('question') question: string,
  ) {
    const image = file.buffer;
    const result = await this.gradioService.predict(image, question);

    // Delete the file after processing
    setTimeout(() => {
      fs.unlink(path.join('./uploads', file.filename), (err) => {
        if (err) {
          console.error('Failed to delete image:', err);
        } else {
          console.log('Image successfully deleted');
        }
      });
    }, 5000);

    return result;
  }
}
