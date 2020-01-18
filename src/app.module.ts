import { Module } from '@nestjs/common';

import { EchartsModule } from './echarts/echarts.module';

import { AppController } from './app.controller';

@Module({
  imports: [EchartsModule],
  controllers: [AppController],
})
export class AppModule {}
