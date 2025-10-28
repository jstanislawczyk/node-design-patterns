import {MessageSender} from "./message-sender";

export class SMSSender implements MessageSender {
    sendMessage(subject: string, body: string): void {
        console.log(`📱 Sending SMS:\n${subject}: ${body}`);
    }
}
