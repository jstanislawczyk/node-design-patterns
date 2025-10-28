import {Component} from './component';

export class Employee extends Component {
  constructor(protected readonly name: string, protected salary: number) {
    super();
  }

  public getName(): string {
    return this.name;
  }

  public getSalary(): number {
    return this.salary;
  }

  public setSalary(salary: number) {
    this.salary = salary;
  }

  public showDetails(indentLevel: number): void {
    const indent = this.generateIndent(indentLevel);
    console.log(`${indent}${this.name} - ${this.salary}`);
  }
}
