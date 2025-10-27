import {NotificationTemplater} from '../templates/notification-templater';
import {NotificationSender} from '../notifications/notification-sender';

export interface NotificationsFactory {
  createTemplater(): NotificationTemplater;
  createSender(): NotificationSender;
}
