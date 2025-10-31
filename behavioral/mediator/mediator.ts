import {LoginDialog} from './components/login-dialog';

const dialog = new LoginDialog();
const { loginInput, passwordInput, loginButton } = dialog.getUI();

console.log("--- Mediator ---");

loginInput.type("john.smith");
passwordInput.type("secretpassword123");
loginButton.click();
