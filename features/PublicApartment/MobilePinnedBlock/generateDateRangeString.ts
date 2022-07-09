import { format } from 'date-fns';
import ruLocale from 'date-fns/locale/ru';

const generateDateRangeString = (firstDate, lastDate) => {
  if (firstDate?.getMonth() === lastDate?.getMonth()) {
    return `${format(firstDate, 'dd')}-${format(lastDate, 'dd MMM', { locale: ruLocale })}`;
  } else {
    return `${format(firstDate, 'dd MMM', { locale: ruLocale })}-${format(lastDate, 'dd MMM', { locale: ruLocale })}`;
  }
};
export default generateDateRangeString;
