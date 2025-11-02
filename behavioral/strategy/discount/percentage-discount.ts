import {PromotionStrategy} from './promotion-strategy';

export class PercentageDiscount implements PromotionStrategy {
  constructor(private percent: number) {}

  public applyDiscount(amount: number): number {
    return amount - (amount * this.percent) / 100;
  }
}
