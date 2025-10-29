import {FileDataSource} from "./data-source/file-data-source";
import {EncryptionDecorator} from "./data-source/encryption-decorator";
import {LoggingDecorator} from "./data-source/logging-decorator";

console.log("--- Decorator ---\n");

console.log("--- Encrypt and Log ---");
const simpleFile = new FileDataSource();
const encryptedFile = new EncryptionDecorator(simpleFile);
const loggedEncryptedFile = new LoggingDecorator(encryptedFile);

loggedEncryptedFile.writeData("John Smith Data");
console.log("\nReading:", loggedEncryptedFile.readData());
console.log("-----------------\n");

console.log("--- Log and Encrypt ---");
const loggedFile = new LoggingDecorator(simpleFile);
const encryptedLoggedFile = new EncryptionDecorator(loggedFile);

encryptedLoggedFile.writeData("Jane Doe Data");
console.log("\nReading:", loggedEncryptedFile.readData());
console.log("-----------------");
