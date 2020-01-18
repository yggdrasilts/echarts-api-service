import { ApiProperty } from '@nestjs/swagger';

import { EChartOption } from 'echarts';

import { ImageOptions } from './image-options.entity';

import { API_ECHART_OPTIONS_SAMPLE } from './options.sample';

/**
 * Class to configure echarts options.
 */
export class Options {
  @ApiProperty({
    type: 'EChartOption',
    description: 'Chart configuration.',
    externalDocs: { url: 'https://echarts.apache.org/en/option.html' },
    example: API_ECHART_OPTIONS_SAMPLE,
  })
  echartOptions: EChartOption;

  options?: ImageOptions;
}
