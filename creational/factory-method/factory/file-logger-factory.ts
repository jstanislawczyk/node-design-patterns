import {LoggerFactory} from './logger-factory';
import {Logger} from '../logger/logger';
import {FileLogger} from '../logger/file-logger';

export class FileLoggerFactory extends LoggerFactory {
  createLogger(): Logger {
    return new FileLogger();
  }
}
