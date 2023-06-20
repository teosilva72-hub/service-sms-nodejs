import moment from 'moment';

export default new class FormatDate {
    async DateNow(date:Date,format:string) {
        moment.locale('pt-BR')
        return moment(date.toUTCString()).format(format);
    }
}