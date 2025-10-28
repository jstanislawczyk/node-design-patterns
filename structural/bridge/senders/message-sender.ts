export interface MessageSender {
    sendMessage(subject: string, body: string): void;
}
