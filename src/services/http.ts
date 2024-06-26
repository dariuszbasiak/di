import {ILogger} from './logger';

import type { ApiConfig } from '../types';

export interface IHTTP {
  get: (url: string) => Promise<any>;
}
export class HTTP implements IHTTP {
  logger: ILogger;
  apiConfig: ApiConfig;

  static $inject = ['config','logger'];
  constructor(apiConfig: ApiConfig, logger: ILogger) {
    this.apiConfig = apiConfig;
    this.logger = logger;
  }

  async get(url: string) {
    const response = await fetch(`${this.apiConfig.path}${url}`);

    if (response.ok) {
      const responseData = await response.json();
      this.logger.info(`Status: ${response.status}. Response: ${JSON.stringify(responseData)}`);

      return responseData;
    } else {
      this.logger.error(`Status: ${response.status}. Status Text: ${response.statusText}`);
    }
  }
}
