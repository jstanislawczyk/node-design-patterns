import {Mediator} from '../mediator/mediator';

export class Component {
  constructor(protected mediator?: Mediator) {}

  public setMediator(mediator: Mediator) {
    this.mediator = mediator;
  }
}
