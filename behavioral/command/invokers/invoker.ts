import {Command} from "../commands/command";

/**
 * The Invoker is associated with one or several commands. It sends a request to
 * the command.
 */
export class Invoker {
    private onStart: Command | undefined;
    private onOrder: Command | undefined;
    private onFinish: Command | undefined;

    public setOnStart(command: Command): void {
        this.onStart = command;
    }

    public setOnOrderProcessing(command: Command): void {
        this.onOrder = command;
    }

    public setOnFinish(command: Command): void {
        this.onFinish = command;
    }

    public doSomethingImportant(): void {
        console.log('Invoker: Does anybody want something done before I begin?');

        if (this.isCommand(this.onStart)) {
            this.onStart.execute();
        }

        console.log('Invoker: ...doing something really important...');

        if (this.isCommand(this.onOrder)) {
            this.onOrder.execute();
        }

        console.log('\nInvoker: Does anybody want something done after I finish?');

        if (this.isCommand(this.onFinish)) {
            this.onFinish.execute();
        }
    }

    private isCommand(object: unknown): object is Command {
        // @ts-ignore
        return "execute" in object;
    }
}
