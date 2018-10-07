import { StringUtils } from '../_utils/string.utils';
import { Privilege } from './privilege.model';

export class User {

    id: string;
    firstName: string;
    lastName: string;
    fullName: string;
    privileges: Array<Privilege>;

    constructor() {
        this.id = '';
        this.firstName = '';
        this.lastName = '';
        this.fullName = '';
        this.privileges = Array();
    }

    genFullName() {

        this.fullName = '';

        if (!StringUtils.isNullOrEmpty(this.firstName)) {
            this.fullName += this.firstName + ' ';
        }

        if (!StringUtils.isNullOrEmpty(this.lastName)) {
            this.fullName += this.lastName;
        }


    }

}
