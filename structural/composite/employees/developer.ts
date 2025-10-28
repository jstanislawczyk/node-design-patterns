import {Employee} from './employee';

export class Developer extends Employee {

  public showDetails(indentLevel: number): void {
    console.log(`${this.generateIndent(indentLevel)}[Developer]: ${this.name} — $${this.salary}`);
  }
}
