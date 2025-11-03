import {Product} from './product';
import {ProductVisitor} from '../visitors/product-visitor';

export class Electronics implements Product {
  constructor(public name: string, public price: number, public warranty: number) {}

  public accept(visitor: ProductVisitor): void {
    visitor.visitElectronics(this);
  }
}
