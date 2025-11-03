import {Product} from './product';
import {ProductVisitor} from '../visitors/product-visitor';

export class Book implements Product {
  constructor(public title: string, public price: number) {}

  public accept(visitor: ProductVisitor): void {
    visitor.visitBook(this);
  }
}
