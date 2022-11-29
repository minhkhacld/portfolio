import { format, getTime, formatDistanceToNow } from 'date-fns';
import { enUS, vi } from 'date-fns/locale';

// ----------------------------------------------------------------------
export function fDate(date) {
  return format(new Date(date), 'dd MMMM yyyy');
}

export function fDateTime(date) {
  return format(new Date(date), 'dd MMM yyyy HH:mm');
}

export function fTimestamp(date) {
  return getTime(new Date(date));
}

export function fDateTimeSuffix(date) {
  return format(new Date(date), 'dd/MM/yyyy hh:mm p');
}

export function fToNow(date, currentLang) {
  return formatDistanceToNow(
    new Date(date),
    { locale: currentLang === 'en' ? enUS : vi },
    {
      addSuffix: true,
    }
  );
}
