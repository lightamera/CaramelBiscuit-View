import { StringUtils } from './string.utils';

export class DateUtils {

    static readonly MONDAY_THAI_NAME = 'วันจันทร์';
    static readonly TUESDAY_THAI_NAME = 'วันอังคาร';
    static readonly WEDNESDAY_THAI_NAME = 'วันพุธ';
    static readonly THUESDAY_THAI_NAME = 'วันพฤหัสบดี';
    static readonly FRIDAY_THAI_NAME = 'วันศุกร์';
    static readonly SATURDAY_THAI_NAME = 'วันเสาร์';
    static readonly SUNDAY_THAI_NAME = 'วันอาทิตย์';

    static convertDateToString(date: Date): string {
        if (date != null) {
            const year: number = date.getFullYear();
            const month: number = date.getMonth() + 1;
            const day: number = date.getDate();
            return year + StringUtils.paddingLeft(2, month, '0') + StringUtils.paddingLeft(2, day, '0');
        } else {
            return null;
        }
    }

    static convertStringToDate(dateString: string): Date {
        if (StringUtils.isNullOrEmpty(dateString)) {
            return null;
        }
        return new Date(dateString.substring(0, 4) + '-' + dateString.substring(4, 6) + '-' + dateString.substring(6, 8));
    }

    static getCurrentYear(): number {
        return (new Date()).getFullYear();
    }

    static getCurrentThaiYear(): number {
        return (new Date()).getFullYear() + 543;
    }

    static getDayThName(dayValue: number): string {
        if (dayValue === 0) {
            return this.SUNDAY_THAI_NAME;
        } else if (dayValue === 1) {
            return this.MONDAY_THAI_NAME;
        } else if (dayValue === 2) {
            return this.TUESDAY_THAI_NAME;
        } else if (dayValue === 3) {
            return this.WEDNESDAY_THAI_NAME;
        } else if (dayValue === 4) {
            return this.THUESDAY_THAI_NAME;
        } else if (dayValue === 5) {
            return this.FRIDAY_THAI_NAME;
        } else if (dayValue === 6) {
            return this.SATURDAY_THAI_NAME;
        }
    }

}
