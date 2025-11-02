import {DocumentState} from './document-state';

export class DocumentContext {
  private state: DocumentState;

  constructor(initialState: DocumentState) {
    this.state = initialState;
  }

  setState(state: DocumentState) {
    this.state = state;
  }

  publish() {
    this.state.publish();
  }

  edit() {
    this.state.edit();
  }
}
