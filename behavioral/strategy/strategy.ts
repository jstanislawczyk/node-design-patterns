import {Order} from './order';
import {FixedDiscount} from './discount/fixed-discount';
import {PercentageDiscount} from './discount/percentage-discount';
import {LoyaltyDiscount} from './discount/loyalty-discount';
import {NoDiscount} from './discount/no-discount';

console.log("--- Strategy ---");
const basePrice = 200;

const order = new Order(new PercentageDiscount(10));
console.log("\n* 10% discount:", order.calculateTotal(basePrice));

order.setStrategy(new FixedDiscount(30));
console.log("* 30$ discount:", order.calculateTotal(basePrice));

order.setStrategy(new LoyaltyDiscount());
console.log("* Loyalty (5%):", order.calculateTotal(basePrice));

order.setStrategy(new NoDiscount());
console.log("* No discount:", order.calculateTotal(basePrice));
