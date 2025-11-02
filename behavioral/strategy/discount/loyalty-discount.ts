import {PromotionStrategy} from './promotion-strategy';

export class LoyaltyDiscount implements PromotionStrategy {
  public applyDiscount(amount: number): number {
    return amount * 0.95; // 5%
  }
}
