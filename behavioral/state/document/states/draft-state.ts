import {DocumentState} from '../document-state';
import {DocumentContext} from '../document-context';
import {ReviewState} from './review-state';

export class DraftState implements DocumentState {
  constructor(private context: DocumentContext) {}

  public publish() {
    console.log("Document sent to review.");
    this.context.setState(new ReviewState(this.context));
  }

  public edit() {
    console.log("Editing draft document.");
  }
}
