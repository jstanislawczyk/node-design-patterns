import {User} from './user';
import {ExternalUser} from './external-user';

export class UserAdapter implements User {
  public id: number;
  public fullName: string;

  constructor(externalData: ExternalUser) {
    this.id = externalData.userId;
    this.fullName = `${externalData.first_name} ${externalData.last_name}`;
  }
}
