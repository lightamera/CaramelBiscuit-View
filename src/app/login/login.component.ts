import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ComponentView } from '../_view/component.view';
import { StringUtils } from '../_utils/string.utils';
import { UserSession } from '../_model/userSession.model';
import { LoginService } from '../_service/login.service';
import { Router } from '@angular/router';
import { User } from '../_model/user.model';
import { UserSessionUtils } from '../_utils/userSession.utils';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent extends ComponentView implements OnInit {

  userName: string;
  password: string;
  message: string;

  constructor(
    private loginService: LoginService,
    private router: Router
  ) {
    super();
  }

  ngOnInit() {
    this.userName = '';
    this.password = '';
    this.message = '';
  }

  checkLoginEnterKey(event): void {
    if (event.keyCode === 13) {
      this.loginButtonOnClick();
    }
  }

  validate() {

    this.message = '';

    if (StringUtils.isNullOrEmpty(this.userName)) {
      throw new Error('กรุณาระบุชื่อผู้ใช้');
    } else if (StringUtils.isNullOrEmpty(this.password)) {
      throw new Error('กรุณาระบุรหัสผ่าน');
    }

  }

  async loginButtonOnClick() {
    this.loadingPage = await true;
    try {

      this.validate();

      const userSession: UserSession = new UserSession();

      await this.loginService.login(this.userName, this.password).then(
        (data) => {
          userSession.user = Object.assign(new User(), data);
        }
      ).catch(function (err) {
        throw err;
      });

      UserSessionUtils.setUserSession(userSession);
      this.router.navigate(['/pages']);

    } catch (e) {
      this.message = e;
    } finally {
      this.loadingPage = await false;
    }
  }
}
