import {Handler} from './handler';

export class CEOHandler extends Handler {
  public handleRequest(amount: number): void {
    if (amount <= 20000) {
      console.log(`💼 CEO approved refund - ${amount}$`);
    } else {
      console.log("🚫 Refund rejected.");
    }
  }
}
