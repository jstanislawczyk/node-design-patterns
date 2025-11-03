import {Product} from './products/product';
import {Book} from './products/book';
import {Electronics} from './products/electronics';
import {TaxCalculatorVisitor} from './visitors/tax-calculator';
import {ReportVisitor} from './visitors/report-visitor';

const products: Product[] = [
  new Book("Clean Code", 100),
  new Electronics("Laptop", 4000, 2)
];

const taxVisitor = new TaxCalculatorVisitor();
const reportVisitor = new ReportVisitor();

console.log("--- Visitor ---");
console.log("\n== Taxes ==");
products.forEach(p => p.accept(taxVisitor));

console.log("\n== Raport ==");
products.forEach(p => p.accept(reportVisitor));
