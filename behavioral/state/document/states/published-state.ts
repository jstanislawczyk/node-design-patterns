import {DocumentState} from './document-state';
import {DocumentContext} from '../document-context';

export class PublishedState implements DocumentState {
  constructor(private context: DocumentContext) {}

  public publish() {
    console.log("Document was already published");
  }

  public edit() {
    console.log("You cannot edit published document.");
  }
}
