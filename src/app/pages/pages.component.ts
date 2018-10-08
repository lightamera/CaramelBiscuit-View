import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ComponentView } from '../_view/component.view';
import { UserSession } from '../_model/userSession.model';
import { Router, NavigationEnd } from '@angular/router';
import { UserSessionUtils } from '../_utils/userSession.utils';
import { MenuItem } from 'primeng/primeng';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PagesComponent extends ComponentView implements OnInit {

  userSession: UserSession;
  menuItems: MenuItem[];
  menuSideBar: boolean;

  constructor(private router: Router) {
    super();
    // override the route reuse strategy
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };

    this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
        // trick the Router into believing it's last link wasn't previously loaded
        this.router.navigated = false;
        // if you need to scroll back to top, here is the right place
        window.scrollTo(0, 0);
      }
    });

  }

  ngOnInit() {
    this.userSession = Object.assign(new UserSession(), UserSessionUtils.getUserSession());
    this.generateMenu();
  }

  async generateMenu() {

    this.loadingPage = await true;

    this.menuItems = [];
    let subMenus: MenuItem[] = [];
    let subSubMenu: MenuItem[] = [];

    if (UserSessionUtils.getUserSession().user.privileges.length === 1) {

        for (const pageHeader of UserSessionUtils.getUserSession().user.privileges[0].pageHeaders) {

            subMenus = [];

            for (const page of pageHeader.pages) {

                subMenus.push({
                    id: page.id,
                    label: page.name,
                    routerLink: page.path,
                    command: click => this.menuSideBar = false,
                });

            }

            this.menuItems.push({
                id: pageHeader.id,
                label: pageHeader.name,
                icon: pageHeader.faIcon,
                items: subMenus
            });

        }
    } else {
        for (const privilege of UserSessionUtils.getUserSession().user.privileges) {

            subMenus = [];

            for (const pageHeader of privilege.pageHeaders) {

                subSubMenu = [];

                for (const page of pageHeader.pages) {

                    subSubMenu.push({
                        id: page.id,
                        label: page.name,
                        routerLink: page.path,
                        command: click => this.menuSideBar = false,
                    });

                }

                subMenus.push({
                    id: pageHeader.id,
                    label: pageHeader.name,
                    icon: pageHeader.faIcon,
                    items: subSubMenu
                });

            }

            this.menuItems.push({
                id: privilege.id,
                label: privilege.name,
                items: subMenus
            });

        }
    }

    this.loadingPage = await false;

}

  onLogout() {
    if (confirm('กรุณายืนยันการออกจากระบบ')) {
      UserSessionUtils.clearUserSession();
      this.router.navigate(['/']);
    }
  }

}
