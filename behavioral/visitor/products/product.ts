import {ProductVisitor} from '../visitors/product-visitor';

export interface Product {
  accept(visitor: ProductVisitor): void;
}
