import {Component} from './component';

export class LoginInput extends Component {
  public value = "";

  public type(value: string) {
    this.value = value;
    console.log(`Login entered: ${value}`);
    this.mediator?.notify(this, "loginChanged");
  }
}
