export const pad2 = (n) => String(n).padStart(2, '0');
export const dateKey = (date) => `${date.getFullYear()}-${pad2(date.getMonth() + 1)}-${pad2(date.getDate())}`;
export const parseLocalDate = (value) => {
  if (!value) return null;
  const dateOnly = String(value).match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (dateOnly) return new Date(Number(dateOnly[1]), Number(dateOnly[2]) - 1, Number(dateOnly[3]));
  const d = new Date(value);
  return Number.isNaN(d.getTime()) ? null : d;
};
export const localDayKey = (value) => {
  const d = value instanceof Date ? value : parseLocalDate(value);
  return d ? dateKey(d) : null;
};
export const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
export const isLeapYear = (year) => year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
export const addMonths = (year, month, amount) => {
  const d = new Date(year, month + amount, 1);
  return { year: d.getFullYear(), month: d.getMonth() };
};

export function monthGrid(year, month, weekStartsOn = 1) {
  const first = new Date(year, month, 1);
  const offset = (first.getDay() - weekStartsOn + 7) % 7;
  const start = new Date(year, month, 1 - offset);
  const cells = [];
  for (let i = 0; i < 42; i++) {
    const date = new Date(start.getFullYear(), start.getMonth(), start.getDate() + i);
    cells.push({ date, key: dateKey(date), inMonth: date.getMonth() === month });
  }
  return cells;
}

export function isoWeek(date) {
  const d = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  d.setDate(d.getDate() + 3 - ((d.getDay() + 6) % 7));
  const isoYear = d.getFullYear();
  const firstThursday = new Date(isoYear, 0, 4);
  const week = 1 + Math.round(((d - firstThursday) / 86400000 - 3 + ((firstThursday.getDay() + 6) % 7)) / 7);
  return { week, year: isoYear };
}

export const weekStart = (date, weekStartsOn = 1) => {
  const d = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  d.setDate(d.getDate() - ((d.getDay() - weekStartsOn + 7) % 7));
  return d;
};

export function formatDate(value, locale = undefined) {
  const d = value instanceof Date ? value : parseLocalDate(value);
  return d ? new Intl.DateTimeFormat(locale, { month: 'short', day: 'numeric', year: 'numeric' }).format(d) : '—';
}

export function cardsOnDay(cards, key) {
  return cards.filter((card) => localDayKey(card.due) === key || localDayKey(card.start) === key);
}
