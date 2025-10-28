import {Notification} from "./notification";

export class MarketingNotification extends Notification {
    notify(recipient: string, message: string): void {
        const subject = `Discount for ${recipient}`;
        const body = `Hi ${recipient}! ${message}`;
        this.sender.sendMessage(subject, body);
    }
}
