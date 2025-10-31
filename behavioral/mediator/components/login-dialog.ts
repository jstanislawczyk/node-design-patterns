import {Mediator} from '../mediator/mediator';
import {LoginInput} from './login-input';
import {PasswordInput} from './password-input';
import {LoginButton} from './login-button';

export class LoginDialog implements Mediator {
  private readonly loginInput: LoginInput;
  private readonly passwordInput: PasswordInput;
  private readonly loginButton: LoginButton;

  constructor() {
    this.loginInput = new LoginInput(this);
    this.passwordInput = new PasswordInput(this);
    this.loginButton = new LoginButton(this);
  }

  public getUI() {
    return { loginInput: this.loginInput, passwordInput: this.passwordInput, loginButton: this.loginButton };
  }

  public notify(sender: object, event: string): void {
    if (event === "loginChanged" || event === "passwordChanged") {
      const bothFilled = this.loginInput.value && this.passwordInput.value;
      this.loginButton.setEnabled(!!bothFilled);
    }

    if (event === "login") {
      console.log("🔐 Sending login data to the server...");
    }
  }
}
