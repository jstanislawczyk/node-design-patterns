import {SmsFactory} from './factory/sms-factory';
import {EmailFactory} from './factory/email-factory';
import {NotificationsFactory} from './factory/notifications-factory';

interface ClientConfig {
  notificationType: "email" | "sms";
}

const smsClientConfig: ClientConfig = {
  notificationType: "sms",
}
const emailClientConfig: ClientConfig = {
  notificationType: "email",
}

const sendClientInvitation = (clientConfig: ClientConfig) => {
  const service: NotificationsFactory = clientConfig.notificationType === "email" ? new EmailFactory() : new SmsFactory();

  const sender = service.createSender();
  const templater = service.createTemplater();
  const invitationTemplate = templater.getInvitationTemplate();

  sender.send(invitationTemplate);
}

console.log("\n--- Abstract Factory ---");

console.log("----------------------------------------");
console.log("Sending SMS");
sendClientInvitation(smsClientConfig);
console.log("----------------------------------------\n");

console.log("----------------------------------------");
console.log("Sending Email");
sendClientInvitation(emailClientConfig);
console.log("----------------------------------------");
