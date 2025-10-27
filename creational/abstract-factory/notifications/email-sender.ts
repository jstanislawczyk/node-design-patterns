import {NotificationSender} from './notification-sender';

export class EmailSender implements NotificationSender {
  public send(message: string): void {
    console.log(`Sending Email Invitation: ${message}`);
  }
}
