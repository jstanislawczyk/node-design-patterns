import {PromotionStrategy} from './promotion-strategy';

export class NoDiscount implements PromotionStrategy {
  public applyDiscount(amount: number): number {
    return amount;
  }
}
