import {DataSource} from "./data-source";

export class FileDataSource implements DataSource {
    private storage: string = "";

    public writeData(data: string): void {
        console.log("💾 Saving to file...");
        this.storage = data;
    }

    public readData(): string {
        console.log("📂 Reading from file...");
        return this.storage;
    }
}
