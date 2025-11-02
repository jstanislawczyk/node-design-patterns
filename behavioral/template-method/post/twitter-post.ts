import {SocialMediaPost} from './social-media-post';

export class TwitterPost extends SocialMediaPost {

  protected writePost(): void {
    console.log("🐦 Creating new Twitter post (max 280 characters)");
  }

  protected addImage(): void {
    console.log("🖼️ Added image to the Twitter post.");
  }

  protected addHashtags() {
    console.log("Added default Twitter hashtags #news #update")
  }
}
