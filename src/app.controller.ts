import { Controller, Post, Header, Body, Res } from '@nestjs/common';
import { Response } from 'express';

import { HttpHeaders, MimeType, BufferUtils } from '@yggdrasilts/volundr';

import { EchartsService } from './echarts/echarts.service';
import { Options } from './echarts/entities/options.entity';
import { DEFAULT_FILENAME } from './echarts/constants';

@Controller()
export class AppController {
  constructor(private readonly echartsService: EchartsService) {}

  @Post('image')
  @Header(HttpHeaders.CONTENT_TYPE, MimeType.IMAGE.PNG)
  async getImage(@Body() opt: Options, @Res() response: Response): Promise<void> {
    const result = await this.echartsService.getImage(opt);
    response.setHeader(HttpHeaders.CONTENT_LENGTH, result.length);
    response.setHeader(HttpHeaders.CONTENT_DISPOSITION, `attachment;filename=${opt.options?.filename || DEFAULT_FILENAME}`);
    response.end(result);
  }

  @Post('image-base64')
  @Header(HttpHeaders.CONTENT_DISPOSITION, MimeType.TEXT.PLAIN)
  async getImageInBase64(@Body() opt: Options): Promise<string> {
    return BufferUtils.toBase64(await this.echartsService.getImage(opt));
  }
}
