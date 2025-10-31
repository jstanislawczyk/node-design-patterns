import {Invoker} from "./invokers/invoker";
import {SimpleCommand} from "./commands/simple-command";
import {Receiver} from "./receivers/receiver";
import {ComplexCommand} from "./commands/complex-command";
import {HistoryCommand} from "./commands/history-command";

const invoker = new Invoker();
const receiver = new Receiver();

console.log("\n--- Command ---");
invoker.setOnStart(new SimpleCommand('Say Hi!'));

const historyCommand = new HistoryCommand();
historyCommand.placeOrder("1111");
historyCommand.placeOrder("2222");
historyCommand.cancelLastOrder();
historyCommand.placeOrder("3333");

invoker.setOnOrderProcessing(historyCommand);
invoker.setOnFinish(new ComplexCommand(receiver, 'Send email', 'Save report'));
invoker.doSomethingImportant();
