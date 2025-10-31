import {Command} from "./command";

/**
 * Some commands can implement simple operations on their own.
 */
export class SimpleCommand implements Command {
    private readonly payload: string;

    constructor(payload: string) {
        this.payload = payload;
    }

    public execute(): void {
        console.log(`SimpleCommand: See, I can do simple things like printing (${this.payload})\n`);
    }
}
