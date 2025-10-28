import {Employee} from './employee';

export class Manager extends Employee {
  private subordinates: Employee[] = [];

  public add(employee: Employee): void {
    this.subordinates.push(employee);
  }

  public remove(employee: Employee): void {
    this.subordinates = this.subordinates.filter(e => e !== employee);
  }

  public getSalary(): number {
    const teamSalary = this.subordinates.reduce(
      (total, e) => total + e.getSalary(),
      0
    );
    return this.salary + teamSalary;
  }

  public showDetails(indentLevel: number): void {
    console.log(`${this.generateIndent(indentLevel)}[Manager]: ${this.name} — $${this.salary}`);
    const nextIndentLevel = indentLevel + 1;
    this.subordinates.forEach(e => e.showDetails(nextIndentLevel));
  }
}
