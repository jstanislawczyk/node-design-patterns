import {MessageSender} from "../senders/message-sender";

export abstract class Notification {
    constructor(protected sender: MessageSender) {}

    abstract notify(recipient: string, message: string): void;
}
