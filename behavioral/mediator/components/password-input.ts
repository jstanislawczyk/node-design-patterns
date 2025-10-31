import {Component} from './component';

export class PasswordInput extends Component {
  public value = "";

  public type(value: string) {
    this.value = value;
    console.log(`Password entered: ${value}`);
    this.mediator?.notify(this, "passwordChanged");
  }
}
