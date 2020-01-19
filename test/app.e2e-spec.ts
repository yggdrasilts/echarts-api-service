import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, HttpStatus } from '@nestjs/common';

import * as request from 'supertest';

import { AppModule } from './../src/app.module';

import { API_ECHART_OPTIONS_SAMPLE } from './../src/echarts/entities/options.sample';
import { Options } from './../src/echarts/entities/options.entity';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  describe('Testing POST methods', () => {
    const body: Options = {
      echartOptions: API_ECHART_OPTIONS_SAMPLE,
    };

    it('/image 400', () => {
      return request(app.getHttpServer())
        .post('/image')
        .expect(HttpStatus.BAD_REQUEST);
    });

    it('/image 201', () => {
      return request(app.getHttpServer())
        .post('/image')
        .send(body)
        .expect(HttpStatus.CREATED);
    });

    it('/image-base64 400', () => {
      return request(app.getHttpServer())
        .post('/image-base64')
        .expect(HttpStatus.BAD_REQUEST);
    });

    it('/image-base64 201', () => {
      return request(app.getHttpServer())
        .post('/image-base64')
        .send(body)
        .expect(HttpStatus.CREATED);
    });
  });
});
