import {DataSource} from "./data-source";

export class DataSourceDecorator implements DataSource {
    constructor(protected wrappee: DataSource) {}

    public writeData(data: string): void {
        this.wrappee.writeData(data);
    }

    public readData(): string {
        return this.wrappee.readData();
    }
}
