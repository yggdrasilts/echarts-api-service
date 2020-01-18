import { Module } from '@nestjs/common';

import { EchartsService } from './echarts.service';

@Module({
  providers: [EchartsService],
  exports: [EchartsService],
})
export class EchartsModule {}
