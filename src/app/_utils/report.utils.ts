import { ReportParamModel } from '../_model/report/param.model';
import { isDevMode } from '@angular/core';

export class ReportUtil {

    private static REPORT_DEV_URL: string = 'http://' + document.location.hostname + '/Ku-WS/public/';
    private static REPORT_URL: string = location.protocol + '//' + document.location.hostname + '/WS/public/';

    static getReportBaseUtl() {
        if (isDevMode()) {
            return this.REPORT_DEV_URL;
        } else {
            return this.REPORT_URL;
        }
    }

    static generateReportUtl(reportRoute: string, params: Array<ReportParamModel>): string {
        let url: string = ReportUtil.getReportBaseUtl();
        url += reportRoute;
        let isFirst = true;
        for (const param of params) {
            if (param.name == null || param.value == null) {
                continue;
            }
            if (isFirst) {
                url += '?';
                isFirst = false;
            } else {
                url += '&';
            }
            url += param.name + '=' + param.value;
        }

        return url;

    }

}
