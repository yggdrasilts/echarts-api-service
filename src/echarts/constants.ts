/**
 * Application constants.
 */
import * as Joi from '@hapi/joi';

export const DEFAULT_IMAGE_WIDTH = 600;

export const DEFAULT_IMAGE_HEIGHT = 250;

export const DEFAULT_FILENAME = 'echarts.png';

export const IMAGE_BODY_VALIDATION_SCHEMA = Joi.object({
  echartOptions: Joi.object().required(),
  options: Joi.object().optional(),
});
