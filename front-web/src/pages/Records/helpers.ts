import moment from 'moment';

export const formtDate = (date: string) => {
    return moment(date).format('DD/MM/YYYY HH:mm')
}