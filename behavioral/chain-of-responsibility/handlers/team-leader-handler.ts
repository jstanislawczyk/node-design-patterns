import {Handler} from './handler';

export class TeamLeaderHandler extends Handler {
  public handleRequest(amount: number): void {
    if (amount <= 1000) {
      console.log(`👨‍💼 Team Leader approved refund - ${amount}$`);
    } else if (this.nextHandler) {
      console.log("➡️ Team leader refers the refund case to his superior...");
      this.nextHandler.handleRequest(amount);
    }
  }
}
