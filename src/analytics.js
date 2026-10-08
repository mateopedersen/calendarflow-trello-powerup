import { localDayKey, parseLocalDate } from './calendar.js';

export function summarize(cards, now = new Date()) {
  const today = localDayKey(now);
  const dated = cards.filter((c) => c.due);
  const incomplete = dated.filter((c) => !c.dueComplete);
  return {
    total: cards.length,
    withDue: dated.length,
    completed: dated.filter((c) => c.dueComplete).length,
    overdue: incomplete.filter((c) => localDayKey(c.due) < today).length,
    upcoming: incomplete.filter((c) => localDayKey(c.due) >= today).length,
    missing: cards.length - dated.length,
  };
}

export function monthlyCounts(cards, year) {
  return Array.from({ length: 12 }, (_, month) => cards.filter((c) => {
    if (!c.due) return false;
    const d = parseLocalDate(c.due);
    if (!d) return false;
    return d.getFullYear() === year && d.getMonth() === month;
  }).length);
}
