import {Command} from "./command";
import {Receiver} from "../receivers/receiver";

/**
 * However, some commands can delegate more complex operations to other objects,
 * called "receivers."
 */
export class ComplexCommand implements Command {
    private receiver: Receiver;

    private readonly a: string;
    private readonly b: string;

    constructor(receiver: Receiver, a: string, b: string) {
        this.receiver = receiver;
        this.a = a;
        this.b = b;
    }

    public execute(): void {
        console.log('ComplexCommand: Complex stuff should be done by a receiver object.');
        this.receiver.doSomething(this.a);
        this.receiver.doSomethingElse(this.b);
        console.log();
    }
}
