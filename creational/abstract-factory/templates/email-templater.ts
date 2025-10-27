import {NotificationTemplater} from './notification-templater';

export class EmailTemplater implements NotificationTemplater {
  public getInvitationTemplate(): string {
    return "Hi, here's Email invitation!";
  }

  public getRegistrationConfirmationTemplate(): string {
    return "Hi, here's Email registration confirmation!";
  }
}
