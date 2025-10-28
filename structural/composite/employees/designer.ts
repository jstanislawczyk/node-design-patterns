import {Employee} from './employee';

export class Designer extends Employee {

  public showDetails(indentLevel: number): void {
    console.log(`${this.generateIndent(indentLevel)}[Designer]: ${this.name} — $${this.salary}`);
  }
}
