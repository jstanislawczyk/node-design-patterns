import {SocialMediaPost} from './social-media-post';

export class BlogPost extends SocialMediaPost {
  protected writePost(): void {
    console.log("📝 Creating blog post.");
  }
}
