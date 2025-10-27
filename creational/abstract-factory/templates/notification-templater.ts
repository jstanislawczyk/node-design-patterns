export interface NotificationTemplater {
  getInvitationTemplate(): string;
  getRegistrationConfirmationTemplate(): string;
}
