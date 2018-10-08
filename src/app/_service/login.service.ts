import { Injectable } from '@angular/core';
import { User } from '../_model/user.model';
import { Privilege } from '../_model/privilege.model';
import { PageHeader } from '../_model/page-header.model';
import { Page } from '../_model/page.model';
import { Http } from '@angular/http';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    constructor(private _http: Http) { }

    async login(userName: string, password: string): Promise<User> {

        if (userName !== 'test' || password !== 'test') {
            throw new Error('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง');
        }

        const user = new User();
        user.id = '1';
        user.firstName = 'ทดสอบ';
        user.lastName = 'ทดสอบ';
        user.genFullName();

        const privilege: Privilege = new Privilege();
        privilege.id = '1';
        privilege.name = 'Super Admin';

        const pageHeaders: PageHeader[] = [];
        let pageHeader: PageHeader = new PageHeader();
        pageHeader.id = '3';
        pageHeader.name = 'Stock';
        pageHeader.order = 3;
        pageHeader.faIcon = 'fa fa-book';

        let pages: Page[] = [];

        let page: Page = new Page();
        page.id = '6';
        page.name = 'Stock ของฉัน';
        page.path = 'init-data/activity';
        page.order = 1;
        pages.push(page);

        page = new Page();
        page.id = '7';
        page.name = 'เพิ่มสินค้าเข้า Stock ของตัวแทน';
        page.path = 'init-data/course';
        page.order = 2;
        pages.push(page);

        page = new Page();
        page.id = '7';
        page.name = 'จัดการ stock ของบริษัท';
        page.path = 'init-data/course';
        page.order = 2;
        pages.push(page);

        pageHeader.pages = pages;
        pageHeaders.push(pageHeader);

        pageHeader = new PageHeader();
        pageHeader.id = '3';
        pageHeader.name = 'ส่งสินค้า';
        pageHeader.order = 3;
        pageHeader.faIcon = 'fa fa-book';

        pages = [];

        page = new Page();
        page.id = '6';
        page.name = 'สั่งสินค้า';
        page.path = 'init-data/activity';
        page.order = 1;
        pages.push(page);

        page = new Page();
        page.id = '7';
        page.name = 'เพิ่มเลข Tracking Number';
        page.path = 'init-data/course';
        page.order = 2;
        pages.push(page);

        page = new Page();
        page.id = '7';
        page.name = 'ตรวจสอบเลข Tracking Number';
        page.path = 'init-data/course';
        page.order = 2;
        pages.push(page);

        pageHeader.pages = pages;
        pageHeaders.push(pageHeader);

        pageHeader = new PageHeader();
        pageHeader.id = '3';
        pageHeader.name = 'รายงาน';
        pageHeader.order = 3;
        pageHeader.faIcon = 'fa fa-book';

        pages = [];

        page = new Page();
        page.id = '6';
        page.name = 'รายงานสินค้าที่ต้องส่ง';
        page.path = 'init-data/activity';
        page.order = 1;
        pages.push(page);

        page = new Page();
        page.id = '7';
        page.name = 'รายงานการสั่งสินค้าของตัวแทน';
        page.path = 'init-data/course';
        page.order = 2;
        pages.push(page);

        page = new Page();
        page.id = '7';
        page.name = 'รายงานการส่งสินค้า';
        page.path = 'init-data/course';
        page.order = 2;
        pages.push(page);

        page = new Page();
        page.id = '7';
        page.name = 'รายงานประจำวัน';
        page.path = 'init-data/course';
        page.order = 2;
        pages.push(page);

        pageHeader.pages = pages;
        pageHeaders.push(pageHeader);

        pageHeader = new PageHeader();
        pageHeader.id = '2';
        pageHeader.name = 'ข้อมูลตั้งต้น';
        pageHeader.order = 2;
        pageHeader.faIcon = 'fa fa-book';

        pages = [];

        page = new Page();
        page.id = '5';
        page.name = 'ประเภทสินค้า';
        page.path = '';
        page.order = 1;
        pages.push(page);

        page = new Page();
        page.id = '6';
        page.name = 'สินค้าทั้งหมด';
        page.path = '';
        page.order = 1;
        pages.push(page);

        pageHeader.pages = pages;
        pageHeaders.push(pageHeader);

        pageHeader = new PageHeader();
        pageHeader.id = '1';
        pageHeader.name = 'ระบบความปลอดภัย';
        pageHeader.order = 1;
        pageHeader.faIcon = 'fa fa-shield';

        pages = [];

        page = new Page();
        page.id = '1';
        page.name = 'จัดการสิทธิ';
        page.path = 'sec/privilege';
        page.order = 1;
        pages.push(page);

        page = new Page();
        page.id = '2';
        page.name = 'จัดการหน้า';
        page.path = 'sec/page';
        page.order = 2;
        pages.push(page);

        page = new Page();
        page.id = '3';
        page.name = 'จัดการสิทธิการเข้าถึงหน้า';
        page.path = 'sec/privilege-page';
        page.order = 3;
        pages.push(page);

        page = new Page();
        page.id = '4';
        page.name = 'จัดการผู้ใช้ (Super Admin)';
        page.path = 'sec/user/SA';
        page.order = 3;
        pages.push(page);

        page = new Page();
        page.id = '8';
        page.name = 'จัดการผู้ใช้ (Admin)';
        page.path = 'sec/user/A';
        page.order = 3;
        pages.push(page);

        page = new Page();
        page.id = '9';
        page.name = 'จัดการผู้ใช้ (ผู้ใช้งาน)';
        page.path = 'sec/user/U';
        page.order = 3;
        pages.push(page);

        pageHeader.pages = pages;
        pageHeaders.push(pageHeader);

        privilege.pageHeaders = pageHeaders;

        user.privileges.push(privilege);

        return user;

    }
}
