# Echarts API Service

## Description

This project is the sample used in the [Create an API service using nestframework](https://blog.yggdrasilts.com/create-an-api-service-using-nestframework) post showing how to create an API service using [NestJS](https://nestjs.com/) framework that use a service to return an [ECharts](https://echarts.apache.org/en/index.html) image chart.

## Requirements

| OS      | Command                                                                                                                     |
| ------- | --------------------------------------------------------------------------------------------------------------------------- |
| OS X    | `brew install pkg-config cairo pango libpng jpeg giflib`                                                                    |
| Ubuntu  | `sudo apt-get install libcairo2-dev libjpeg8-dev libpango1.0-dev libgif-dev build-essential g++`                            |
| Fedora  | `sudo yum install cairo cairo-devel cairomm-devel libjpeg-turbo-devel pango pango-devel pangomm pangomm-devel giflib-devel` |
| Solaris | `pkgin install cairo pango pkg-config xproto renderproto kbproto xextproto`                                                 |

- More information in the [node-echarts](https://github.com/telco2011/node-echarts) repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev
```

## Test

```bash
# e2e tests
$ npm run test:e2e
```

## Stay in touch

- Website - [https://blog.yggdrasilts.com/](https://blog.yggdrasilts.com/)
- Twitter - [@yggdrasilTS](https://twitter.com/yggdrasilTS)

## License

This sample is [MIT licensed](LICENSE.md).
