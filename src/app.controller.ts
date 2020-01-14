import { Controller, Post, Header, Body, Res, UsePipes, Logger } from '@nestjs/common';
import { Response } from 'express';

import { HttpHeaders, MimeType, BufferUtils } from '@yggdrasilts/volundr';

import { EchartsService } from './echarts/echarts.service';
import { Options } from './echarts/entities/options.entity';
import { DEFAULT_FILENAME, IMAGE_BODY_VALIDATION_SCHEMA } from './echarts/constants';

import { BodyValidationPipe } from './pipes/body.validation.pipe';

@Controller()
export class AppController {
  private readonly logger = new Logger(AppController.name);

  constructor(private readonly echartsService: EchartsService) {}

  @Post('image')
  @Header(HttpHeaders.CONTENT_TYPE, MimeType.IMAGE.PNG)
  @UsePipes(new BodyValidationPipe(IMAGE_BODY_VALIDATION_SCHEMA))
  async getImage(@Body() opt: Options, @Res() response: Response): Promise<void> {
    const result = await this.echartsService.getImage(opt);
    response.setHeader(HttpHeaders.CONTENT_LENGTH, result.length);
    response.setHeader(HttpHeaders.CONTENT_DISPOSITION, `attachment;filename=${opt.options?.filename || DEFAULT_FILENAME}`);
    response.end(result);
  }

  @Post('image-base64')
  @Header(HttpHeaders.CONTENT_DISPOSITION, MimeType.TEXT.PLAIN)
  @UsePipes(new BodyValidationPipe(IMAGE_BODY_VALIDATION_SCHEMA))
  async getImageInBase64(@Body() opt: Options): Promise<string> {
    return BufferUtils.toBase64(await this.echartsService.getImage(opt));
  }
}
