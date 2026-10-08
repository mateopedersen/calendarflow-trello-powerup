import { localDayKey, parseLocalDate } from './calendar.js';

const csvCell = (value) => {
  let text = String(value ?? '');
  if (/^[\s\u0000-\u001f]*[=+@\-]/.test(text)) text = `'${text}`;
  return `"${text.replaceAll('"', '""')}"`;
};

export function toCsv(cards) {
  const rows = [['Card title', 'Start date', 'Due date', 'Complete', 'List', 'Trello URL']];
  for (const c of cards) rows.push([c.name, c.start ? localDayKey(c.start) : '', c.due ? localDayKey(c.due) : '', c.dueComplete ? 'Yes' : 'No', c.listName, c.url]);
  return rows.map((row) => row.map(csvCell).join(',')).join('\r\n');
}

const icsEscape = (s) => String(s ?? '').replaceAll('\\', '\\\\').replaceAll('\n', '\\n').replaceAll(',', '\\,').replaceAll(';', '\\;');
const foldLine = (line) => {
  const parts = [];
  let current = '';
  let bytes = 0;
  for (const char of line) {
    const size = new TextEncoder().encode(char).length;
    if (bytes + size > 73) { parts.push(current); current = ` ${char}`; bytes = 1 + size; }
    else { current += char; bytes += size; }
  }
  parts.push(current);
  return parts.join('\r\n');
};
const utcStamp = (value) => new Date(value).toISOString().replaceAll('-', '').replaceAll(':', '').replace(/\.\d{3}Z$/, 'Z');

export function toIcs(cards, generatedAt = new Date()) {
  const lines = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Beta Calendars//CalendarFlow 0.1//EN', 'CALSCALE:GREGORIAN', 'METHOD:PUBLISH'];
  for (const c of cards.filter((x) => x.due)) {
    const due = parseLocalDate(c.due);
    if (Number.isNaN(due.getTime())) continue;
    const allDay = /^\d{4}-\d{2}-\d{2}$/.test(c.due);
    const day = localDayKey(due).replaceAll('-', '');
    lines.push('BEGIN:VEVENT', `UID:${icsEscape(c.id || `${day}-${c.name}`)}@calendarflow.betacalendars.com`, `DTSTAMP:${utcStamp(generatedAt)}`);
    if (allDay) {
      const next = new Date(due.getFullYear(), due.getMonth(), due.getDate() + 1);
      lines.push(`DTSTART;VALUE=DATE:${day}`, `DTEND;VALUE=DATE:${localDayKey(next).replaceAll('-', '')}`);
    } else lines.push(`DTSTART:${utcStamp(due)}`, `DTEND:${utcStamp(new Date(due.getTime() + 3600000))}`);
    lines.push(`SUMMARY:${icsEscape(c.dueComplete ? `Completed: ${c.name}` : c.name)}`, `URL:${icsEscape(c.url)}`, 'STATUS:CONFIRMED', 'END:VEVENT');
  }
  lines.push('END:VCALENDAR');
  return lines.map(foldLine).join('\r\n') + '\r\n';
}
