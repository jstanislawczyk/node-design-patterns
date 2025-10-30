export abstract class Handler {
  protected nextHandler?: Handler;

  public setNext(handler: Handler): Handler {
    this.nextHandler = handler;
    return handler;
  }

  public handleRequest(amount: number): void {
    if (this.nextHandler) {
      this.nextHandler.handleRequest(amount);
    } else {
      console.log("❌ No one can accept this.");
    }
  }
}
