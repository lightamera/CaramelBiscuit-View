import { User } from './user.model';

export class UserSession {

    user: User;

    constructor() {
        this.user = new User();
    }

}
