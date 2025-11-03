import {Book} from '../products/book';
import {Electronics} from '../products/electronics';

export interface ProductVisitor {
  visitBook(book: Book): void;
  visitElectronics(electronics: Electronics): void;
}
