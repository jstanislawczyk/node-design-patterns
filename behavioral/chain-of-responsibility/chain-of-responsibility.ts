import {TeamLeaderHandler} from './handlers/team-leader-handler';
import {DepartmentManagerHandler} from './handlers/department-manager-handler';
import {CEOHandler} from './handlers/ceo-handler';

const leader = new TeamLeaderHandler();
const manager = new DepartmentManagerHandler();
const ceo = new CEOHandler();

leader.setNext(manager).setNext(ceo);

const amounts = [500, 2500, 10000, 50000];

console.log("\n--- Chain of responsibility ---");

for (const amount of amounts) {
  console.log(`\n💰 Refund ${amount}$:`);
  leader.handleRequest(amount);
}

