import {Observer} from './observer';

export class TVChannel implements Observer {
  constructor(private name: string) {}

  public update(news: string) {
    console.log(`📺 ${this.name} broadcasting: ${news}`);
  }
}
