import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserSessionUtils } from '../_utils/userSession.utils';
import { StringUtils } from '../_utils/string.utils';

@Injectable({
  providedIn: 'root'
})
export class PassToPagesGuard implements CanActivate {

  constructor(public router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (UserSessionUtils.getUserSession() != null && !StringUtils.isNullOrEmpty(UserSessionUtils.getUserSession().user.id)) {
      this.router.navigate(['/pages']);
      return false;
    }
    return true;

  }
}
