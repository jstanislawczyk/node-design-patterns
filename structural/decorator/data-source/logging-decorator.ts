import {DataSourceDecorator} from "./data-source-decorator";

export class LoggingDecorator extends DataSourceDecorator {
    public writeData(data: string): void {
        console.log(`📝 Log: Saving data (${data.length} bytes)`);
        super.writeData(data);
    }

    public readData(): string {
        const result = super.readData();
        console.log(`📝 Log: Reading data (${result.length} bytes)`);
        return result;
    }
}
