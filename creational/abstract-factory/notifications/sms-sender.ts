import {NotificationSender} from './notification-sender';

export class SmsSender implements NotificationSender {
  public send(message: string): void {
    console.log(`Sending SMS Invitation: ${message}`);
  }
}
