import {LoggerFactory} from './logger-factory';
import {Logger} from '../logger/logger';
import {ConsoleLogger} from '../logger/console-logger';

export class ConsoleLoggerFactory extends LoggerFactory {
  createLogger(): Logger {
    return new ConsoleLogger();
  }
}
