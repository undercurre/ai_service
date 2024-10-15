import { Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { GradioController } from './gradio.controller';
import { GradioService } from './gradio.service';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';

@Module({
  imports: [AuthModule],
  controllers: [GradioController],
  providers: [GradioService, { provide: APP_GUARD, useClass: JwtAuthGuard }],
})
export class GradioModule {}
