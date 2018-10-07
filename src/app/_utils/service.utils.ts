import { isDevMode } from '@angular/core';
import { RequestOptions, Headers } from '@angular/http';

export class ServiceUtil {

    private static WS_DEV_URL = 'http://localhost/git/KU/ws/public/';
    private static WS_URL: string = location.protocol + '//' + document.location.hostname + '/WS/public/';

    static getWebServiceUrl(): any {

        if (isDevMode()) {
            return this.WS_DEV_URL;
        } else {
            return this.WS_URL;
        }

    }

    static getReportServiceUrl(): any {

        if (isDevMode()) {
            return this.WS_DEV_URL;
        } else {
            return this.WS_URL;
        }

    }

}
