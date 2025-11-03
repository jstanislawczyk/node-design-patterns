import {ProductVisitor} from './product-visitor';
import {Book} from '../products/book';
import {Electronics} from '../products/electronics';

export class ReportVisitor implements ProductVisitor {
  public visitBook(book: Book): void {
    console.log(`📘 Raport książki: ${book.title} — ${book.price}$`);
  }

  public visitElectronics(electronics: Electronics): void {
    console.log(`🔌 Electronic report: ${electronics.name} (${electronics.warranty} warranty)`);
  }
}
