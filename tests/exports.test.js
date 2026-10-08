import test from 'node:test';
import assert from 'node:assert/strict';
import { toCsv, toIcs } from '../src/exports.js';

test('CSV escapes quotes and blocks formula-leading values', () => {
  const csv = toCsv([{ name: '=1+1,"task"', due: '2028-02-29', dueComplete: false, listName: 'Plan', url: 'https://trello.com/c/x' }]);
  assert.match(csv, /"'=1\+1,""task"""/);
  assert.match(csv, /2028-02-29/);
});

test('iCalendar output has a valid envelope and escaped text', () => {
  const ics = toIcs([{ id: 'abc', name: 'Review, plan; notes\\done\nnext', due: '2028-02-29', url: 'https://trello.com/c/abc', dueComplete: false }], new Date('2026-10-08T12:00:00Z'));
  assert.ok(ics.startsWith('BEGIN:VCALENDAR\r\n'));
  assert.ok(ics.endsWith('END:VCALENDAR\r\n'));
  assert.match(ics, /SUMMARY:Review\\, plan\\; notes\\\\done\\nnext/);
  assert.match(ics, /DTSTART;VALUE=DATE:20280229/);
  assert.match(ics, /DTEND;VALUE=DATE:20280301/);
});

test('iCalendar lines fold within RFC byte limit', () => {
  const ics = toIcs([{ id: 'one', name: '長'.repeat(80), due: '2028-02-29T18:30:00Z', url: '', dueComplete: true }], new Date('2026-10-08T12:00:00Z'));
  for (const line of ics.split('\r\n')) assert.ok(new TextEncoder().encode(line).length <= 75, `${line.length} characters`);
  assert.match(ics, /DTSTART:20280229T183000Z/);
});
