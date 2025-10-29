import {DataSourceDecorator} from "./data-source-decorator";
import { Buffer } from 'node:buffer';

export class EncryptionDecorator extends DataSourceDecorator {
    public writeData(data: string): void {
        const encrypted = Buffer.from(data).toString("base64");
        console.log("🔐 Encrypting");
        super.writeData(encrypted);
    }

    public readData(): string {
        const data = super.readData();
        const decrypted = Buffer.from(data, "base64").toString("utf-8");

        console.log("🔓 Decrypting...");

        return decrypted;
    }
}
