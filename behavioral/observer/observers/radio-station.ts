import {Observer} from './observer';

export class RadioStation implements Observer {
  constructor(private name: string) {}

  public update(news: string) {
    console.log(`📻 ${this.name} announces: ${news}`);
  }
}
