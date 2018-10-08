import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { UserSessionUtils } from '../_utils/userSession.utils';
import { StringUtils } from '../_utils/string.utils';

@Injectable({
    providedIn: 'root'
})
export class PrivilegeGuard implements CanActivateChild {

    constructor(public router: Router) { }

    canActivateChild(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {


        if (state.url !== '/pages/home' && state.url !== '/pages/change-password') {

            for (const privilege of UserSessionUtils.getUserSession().user.privileges) {
                for (const pageHeader of privilege.pageHeaders) {
                    for (const page of pageHeader.pages) {
                        if (page.path === state.url.replace('/pages/', '')) {
                            return true;
                        }
                    }
                }
            }

            this.router.navigate(['/pages']);
            return false;

        }

        return true;

    }
}
