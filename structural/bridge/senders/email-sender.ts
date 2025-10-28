import {MessageSender} from "./message-sender";

export class EmailSender implements MessageSender {
    sendMessage(subject: string, body: string): void {
        console.log(`📧 Sending Email:\nTopic: ${subject}\nContent: ${body}`);
    }
}
