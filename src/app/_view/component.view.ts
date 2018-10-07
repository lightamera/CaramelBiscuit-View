import { DateUtils } from '../_utils/date.utils';
import { Message, SelectItem } from 'primeng/primeng';

export class ComponentView {

    constructor() { }

    // MODE
    readonly MODE_INSERT: string = 'I';
    readonly MODE_SEARCH: string = 'Q';
    readonly MODE_UPDATE: string = 'U';
    readonly MODE_VIEW: string = 'V';
    readonly MODE_NONE: string = 'N';
    mode: String = 'Q';

    // Loading Page
    loadingPage = false;

    // MessageNotification
    msgs: Message[];

    // Calendar year rang
    yearRang5: string = (+DateUtils.getCurrentYear() - 5) + ':' + (+DateUtils.getCurrentYear() + 5);
    yearRangBirthDate: string = (+DateUtils.getCurrentYear() - 200) + ':' + DateUtils.getCurrentYear();

    // Calendar th
    calendarTH: any = {
        firstDayOfWeek: 0,
        dayNames: ['วันอาทิตย์', 'วันจันทร์', 'วันอังคาร', 'วันพุธ', 'วันพฤหัสบดี', 'วันศุกร์', 'วันเสาร์'],
        dayNamesShort: ['อา', 'จ', 'อ', 'พ', 'พฤ', 'ศ', 'ส'],
        dayNamesMin: ['อา', 'จ', 'อ', 'พ', 'พฤ', 'ศ', 'ส'],
        monthNames: ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'],
        monthNamesShort: ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.']
    };

    displayCalendarDate(date: Date) {
        if (date == null) {
            return null;
        } else {
            const stringDate = DateUtils.convertDateToString(date);
            return stringDate.substring(6) + '/' + stringDate.substring(4, 6) + '/' + (Number(stringDate.substring(0, 4)) + 543);
        }
    }

    messageSuccess(message: string, messageDetail: string) {
        this.clearMessage();
        this.msgs.push({ severity: 'success', summary: message, detail: messageDetail });
        window.scroll(0, 0);
    }

    messageInfo(message: string, messageDetail: string) {
        this.clearMessage();
        this.msgs.push({ severity: 'info', summary: message, detail: messageDetail });
        window.scroll(0, 0);
    }

    messageWarn(message: string, messageDetail: string) {
        this.clearMessage();
        this.msgs.push({ severity: 'warn', summary: message, detail: messageDetail });
        window.scroll(0, 0);
    }

    messageError(message: string, messageDetail: string) {
        this.clearMessage();
        this.msgs.push({ severity: 'error', summary: message, detail: messageDetail });
        window.scroll(0, 0);
    }

    clearMessage() {
        this.msgs = [];
    }

}
