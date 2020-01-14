import { Injectable } from '@nestjs/common';

import * as node_echarts from 'node-echarts';

import { buffer } from 'imagemin';
import imageminPngquant from 'imagemin-pngquant';
import * as imageminJpegtran from 'imagemin-jpegtran';

import { DEFAULT_IMAGE_WIDTH, DEFAULT_IMAGE_HEIGHT } from './constants';

import { Options } from './entities/options.entity';

@Injectable()
export class EchartsService {
  /**
   * Get the echarts as image.
   *
   * @param {Options} opt {@link Options}.
   */
  async getImage(opt: Options): Promise<Buffer> {
    return buffer(
      node_echarts({
        option: opt.echartOptions,
        width: opt.options?.width || DEFAULT_IMAGE_WIDTH,
        height: opt.options?.height || DEFAULT_IMAGE_HEIGHT,
      }),
      {
        // plugins to compress the image to be sent
        plugins: [
          imageminJpegtran(),
          imageminPngquant({
            quality: [0.6, 0.8],
          }),
        ],
      },
    );
  }
}
