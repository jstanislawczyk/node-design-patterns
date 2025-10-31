import {Component} from './component';

export class LoginButton extends Component {
  public enabled = false;

  public setEnabled(state: boolean) {
    this.enabled = state;
    console.log(`Login button: ${state ? "active" : "inactive"}`);
  }

  public click() {
    if (this.enabled) {
      console.log("✅ Logging...");
      this.mediator?.notify(this, "login");
    } else {
      console.log("❌ Cannot log in - no data.");
    }
  }
}
