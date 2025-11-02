import {PromotionStrategy} from './promotion-strategy';

export class FixedDiscount implements PromotionStrategy {
  constructor(private discount: number) {}

  public applyDiscount(amount: number): number {
    return Math.max(0, amount - this.discount);
  }
}
