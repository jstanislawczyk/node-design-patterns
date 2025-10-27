import {NotificationsFactory} from './notifications-factory';
import {NotificationSender} from '../notifications/notification-sender';
import {NotificationTemplater} from '../templates/notification-templater';
import {SmsTemplater} from '../templates/sms-templater';
import {SmsSender} from '../notifications/sms-sender';

export class SmsFactory implements NotificationsFactory {
  createSender(): NotificationSender {
    return new SmsSender();
  }

  createTemplater(): NotificationTemplater {
    return new SmsTemplater();
  }
}
