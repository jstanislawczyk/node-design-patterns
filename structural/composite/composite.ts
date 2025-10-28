import {Developer} from './employees/developer';
import {Designer} from './employees/designer';
import {Manager} from './employees/manager';

console.log("--- Composite ---");

const dev1 = new Developer("Ann", 8000);
const dev2 = new Developer("John", 7500);
const designer = new Designer("Adam", 7000);
const teamLead = new Manager("James", 10000);
teamLead.add(designer);
teamLead.add(dev1);
teamLead.add(dev2);

const director = new Manager("Caroline", 20000);
director.add(teamLead);
director.add(new Developer("Tobias", 9000));

director.showDetails(0);

console.log(`\n💰 Full cost: $${director.getSalary()}`);
