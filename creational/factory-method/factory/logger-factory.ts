import {Logger} from '../logger/logger';

export abstract class LoggerFactory {
  abstract createLogger(): Logger;

  logMessage(message: string): void {
    const logger = this.createLogger();
    logger.log(message);
  }
}
