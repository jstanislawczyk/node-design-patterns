import {ConsoleLoggerFactory} from './factory/console-logger-factory';
import {FileLoggerFactory} from './factory/file-logger-factory';

console.log("\n--- Factory Method ---");

console.log("----------------------------------------");
console.log("Console Logger");
const consoleFactory = new ConsoleLoggerFactory();
const consoleLogger = consoleFactory.createLogger();
consoleFactory.logMessage("Test 1 - Direct");
consoleLogger.log("Test 1 - Logger");
console.log("----------------------------------------\n");

console.log("----------------------------------------");
console.log("File Logger");
const loggerFactory = new FileLoggerFactory();
const fileLogger = loggerFactory.createLogger();
loggerFactory.logMessage("Test 2 - Direct");
fileLogger.log("Test 2 - Logger");
console.log("----------------------------------------");
