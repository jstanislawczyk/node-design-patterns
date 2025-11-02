import {DocumentContext} from '../document-context';
import {DocumentState} from './document-state';
import {PublishedState} from './published-state';

export class ReviewState implements DocumentState {
  constructor(private context: DocumentContext) {}

  public publish() {
    console.log("Document was accepted and published");
    this.context.setState(new PublishedState(this.context));
  }

  public edit() {
    console.log("You cannot edit document that is reviewed");
  }
}
