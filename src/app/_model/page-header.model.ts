import { Page } from './page.model';

export class PageHeader {

    id: string;
    name: string;
    faIcon: string;
    order: number;
    pages: Array<Page>;

    constructor() {
        this.id = '';
        this.name = '';
        this.faIcon = '';
        this.order = null;
        this.pages = Array();
    }

}
