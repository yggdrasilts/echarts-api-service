import { ExceptionFilter, Catch, ArgumentsHost, HttpException, Logger } from '@nestjs/common';
import { Request, Response } from 'express';

import { HttpHeaders, MimeType } from '@yggdrasilts/volundr';

/**
 * Filter to catch HttpException manipulating the response to get understandable response.
 */
@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(HttpExceptionFilter.name);

  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();
    const message = exception.message;

    const errorData = {
      timestamp: new Date().toISOString(),
      message,
      details: {
        request: {
          method: request.method,
          query: request.query,
          body: request.body,
        },
        path: request.url,
      },
    };
    this.logger.error(`${JSON.stringify(errorData)}`);
    response.setHeader(HttpHeaders.CONTENT_TYPE, MimeType.APPLICATION.JSON);
    response.status(status).json(errorData);
  }
}
