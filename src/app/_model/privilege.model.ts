import { PageHeader } from './page-header.model';

export class Privilege {

    id: string;
    code: string;
    name: string;
    pageHeaders: Array<PageHeader>;

    constructor() {
        this.id = '';
        this.code = '';
        this.name = '';
        this.pageHeaders = Array();
    }

}
