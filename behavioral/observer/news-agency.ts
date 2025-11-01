import {Observer} from './observers/observer';

export class NewsAgency {
  private observers: Observer[] = [];
  private news: string = "";

  public addObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  public removeObserver(observer: Observer): void {
    this.observers = this.observers.filter(o => o !== observer);
  }

  public setNews(news: string): void {
    this.news = news;
    this.notifyObservers();
  }

  private notifyObservers(): void {
    for (const observer of this.observers) {
      observer.update(this.news);
    }
  }
}
