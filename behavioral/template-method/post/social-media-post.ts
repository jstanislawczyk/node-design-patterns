export abstract class SocialMediaPost {

  public publish(): void {
    this.writePost();
    this.addHashtags();
    this.addImage();
    this.sendNotification();
  }

  protected abstract writePost(): void;

  protected addHashtags(): void {
    console.log("Added default hashtags #news #update");
  }

  // Optional hook
  protected addImage(): void {}

  protected sendNotification(): void {
    console.log("📣 Notification about the new post.");
  }
}
