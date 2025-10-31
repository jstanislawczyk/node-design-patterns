import {Command} from "./command";

/**
 * However, some commands can delegate more complex operations to other objects,
 * called "receivers."
 */
export class HistoryCommand implements Command {
    private readonly history: string[];

    constructor() {
        this.history = []
    }

    public placeOrder(order: string): void {
        this.history.push(order);
    }

    public cancelLastOrder(): void {
        this.history.pop();
    }

    public execute(): void {
        console.log('HistoryCommand: we can batch multiple commands.');

        for (const entry of this.history) {
            console.log("Executing HistoryCommand: " + entry);
        }
    }
}
