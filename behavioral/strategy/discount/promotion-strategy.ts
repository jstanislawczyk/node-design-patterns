export interface PromotionStrategy {
  applyDiscount(amount: number): number;
}
