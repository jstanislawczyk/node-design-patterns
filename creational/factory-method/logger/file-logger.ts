import {Logger} from './logger';

export class FileLogger implements Logger {
  public log(message: string): void {
    console.log(`[FileLogger] ${message}`);
  }
}
