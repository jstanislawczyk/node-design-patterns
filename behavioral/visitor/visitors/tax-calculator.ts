import {ProductVisitor} from './product-visitor';
import {Book} from '../products/book';
import {Electronics} from '../products/electronics';

export class TaxCalculatorVisitor implements ProductVisitor {
  public visitBook(book: Book): void {
    const tax = book.price * 0.05;
    console.log(`📚 Book tax "${book.title}": ${tax.toFixed(2)}$`);
  }

  public visitElectronics(electronics: Electronics): void {
    const tax = electronics.price * 0.23;
    console.log(`💻 Electronic tax "${electronics.name}": ${tax.toFixed(2)}$`);
  }
}
