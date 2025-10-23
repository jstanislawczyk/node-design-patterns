export class DBConnection {
  static cached: DBConnection;

  private constructor() {}

  private isConnected: boolean = false;

  public static get instance(): DBConnection {
    if (!DBConnection.cached) {
      DBConnection.cached = new DBConnection();
    }

    return DBConnection.cached;
  }

  public connect() {
    console.log("Connecting to the database...");
    this.isConnected = true;
  }

  public disconnect() {
    console.log("Disconnecting from the database...");
    this.isConnected = false;
  }

  public isConnectedStatus(): boolean {
    return this.isConnected;
  }
}
