import {ExternalUser} from './external-user';
import {UserAdapter} from './user-adapter';

const externalUser: ExternalUser = {
  userId: 42,
  first_name: "John",
  last_name: "Smith"
};
const user = new UserAdapter(externalUser);

console.log("\n--- Adapter ---");
console.log(user);
