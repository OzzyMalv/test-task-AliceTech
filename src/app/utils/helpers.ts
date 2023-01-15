import moment from "moment";

/**
 * I didn't understand wtf is '3852.5' as format date so I just added as an hours to current date
 * @param date
 * @return string
 */
export const momentConvertDate = (date: number) => moment().add(date, 'hours').format('DD-MM-YYYY hh:mm')
