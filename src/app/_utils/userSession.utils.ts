import { UserSession } from '../_model/userSession.model';
import { User } from '../_model/user.model';

export class UserSessionUtil {

    static checkPrivilageByCode(privilegeCode: string): boolean {
        for (const privilege of UserSessionUtil.getUserSession().user.privileges) {
            if (privilege.code === privilegeCode) {
                return true;
            }
        }
        return false;
    }

    static getUserSession(): UserSession {
        const userSession = Object.assign(new UserSession(), JSON.parse(sessionStorage.getItem('usserSession')));
        userSession.user = Object.assign(new User(), userSession.user);
        return userSession;
    }

    static setUserSession(usserSession: UserSession) {
        sessionStorage.setItem('usserSession', JSON.stringify(usserSession));
    }

    static clearUserSession() {
        sessionStorage.removeItem('usserSession');
    }

}
