import {Handler} from './handler';

export class DepartmentManagerHandler extends Handler {
  public handleRequest(amount: number): void {
    if (amount <= 5000) {
      console.log(`👩‍💼 Department Manager approved refund - ${amount}$`);
    } else if (this.nextHandler) {
      console.log("➡️ Department Manager refers the refund case to his superior...");
      this.nextHandler.handleRequest(amount);
    }
  }
}
