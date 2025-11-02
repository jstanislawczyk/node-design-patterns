import {TwitterPost} from './post/twitter-post';
import {BlogPost} from './post/blog-post';

console.log("---Template method ---\n");
new TwitterPost().publish();
console.log();
new BlogPost().publish();
