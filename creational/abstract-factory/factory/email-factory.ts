import {NotificationsFactory} from './notifications-factory';
import {NotificationSender} from '../notifications/notification-sender';
import {NotificationTemplater} from '../templates/notification-templater';
import {EmailSender} from '../notifications/email-sender';
import {EmailTemplater} from '../templates/email-templater';

export class EmailFactory implements NotificationsFactory {
  createSender(): NotificationSender {
    return new EmailSender();
  }

  createTemplater(): NotificationTemplater {
    return new EmailTemplater();
  }
}
