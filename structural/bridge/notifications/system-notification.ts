import {Notification} from "./notification";

export class SystemNotification extends Notification {
    notify(recipient: string, message: string): void {
        const subject = "Important!";
        const body = `Dear ${recipient}, ${message}`;
        this.sender.sendMessage(subject, body);
    }
}
