import {EmailSender} from "./senders/email-sender";
import {SMSSender} from "./senders/sms-sender";
import {MarketingNotification} from "./notifications/marketing-notification";
import {SystemNotification} from "./notifications/system-notification";

const emailSender = new EmailSender();
const smsSender = new SMSSender();

const marketingEmail = new MarketingNotification(emailSender);
const marketingSMS =  new MarketingNotification(smsSender);
const systemEmail = new SystemNotification(emailSender);
const systemSMS = new SystemNotification(smsSender);

const recipient = "John Smith";
const message = "Test message";

console.log("--- Bridge ---");

console.log("\n--------------------------------");
console.log("Marketing email");
marketingEmail.notify(recipient, message);
console.log("--------------------------------");

console.log("\n--------------------------------");
console.log("Marketing SMS");
marketingSMS.notify(recipient, message);
console.log("--------------------------------");

console.log("\n--------------------------------");
console.log("System Email");
systemEmail.notify(recipient, message);
console.log("--------------------------------");

console.log("\n--------------------------------");
console.log("System SMS");
systemSMS.notify(recipient, message);
console.log("--------------------------------");
