import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ComponentView } from '../_view/component.view';

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

  constructor() {
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

  async loginButtonOnClick() {

  }
}
