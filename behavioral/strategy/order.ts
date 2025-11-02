import {PromotionStrategy} from './discount/promotion-strategy';

export class Order {
  constructor(private strategy: PromotionStrategy) {}

  setStrategy(strategy: PromotionStrategy) {
    this.strategy = strategy;
  }

  calculateTotal(amount: number): number {
    return this.strategy.applyDiscount(amount);
  }
}
