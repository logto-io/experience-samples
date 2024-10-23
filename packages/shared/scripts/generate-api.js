import path from 'node:path';

import { generateApi } from 'swagger-typescript-api';

const outputDirectory = path.resolve(import.meta.dirname, '../src');
const openApiJsonUrl = 'https://auth.logto.app/api/.well-known/experience.openapi.json';

generateApi({
  name: 'experience-api.ts',
  url: openApiJsonUrl,
  output: outputDirectory,
  httpClientType: 'fetch',
  // Extract the response body type from the OpenAPI spec
  extractResponseBody: true,
  unwrapResponseData: true,
  // This will group the routes by the first tag: experience and interaction
  moduleNameFirstTag: true,
});
