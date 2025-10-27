import {NotificationTemplater} from './notification-templater';

export class SmsTemplater implements NotificationTemplater {
  public getInvitationTemplate(): string {
    return "Hi, here's SMS invitation!";
  }

  public getRegistrationConfirmationTemplate(): string {
    return "Hi, here's SMS registration confirmation!";
  }
}
