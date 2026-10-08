import test from 'node:test';
import assert from 'node:assert/strict';
import { addMonths, daysInMonth, isLeapYear, isoWeek, monthGrid, parseLocalDate } from '../src/calendar.js';

test('Gregorian leap years and month lengths', () => {
  assert.equal(isLeapYear(2000), true);
  assert.equal(isLeapYear(1900), false);
  assert.equal(isLeapYear(2028), true);
  assert.equal(daysInMonth(2028, 1), 29);
  assert.equal(daysInMonth(2027, 1), 28);
});

test('month navigation crosses year boundaries', () => {
  assert.deepEqual(addMonths(2026, 11, 1), { year: 2027, month: 0 });
  assert.deepEqual(addMonths(2027, 0, -1), { year: 2026, month: 11 });
});

test('month grids start at the requested weekday and contain every date', () => {
  const monday = monthGrid(2027, 0, 1);
  assert.equal(monday[0].date.getDay(), 1);
  assert.equal(monday.filter((cell) => cell.inMonth).length, 31);
  const sunday = monthGrid(2027, 0, 0);
  assert.equal(sunday[0].date.getDay(), 0);
});

test('ISO week-year boundaries are correct', () => {
  assert.deepEqual(isoWeek(new Date(2021, 0, 1)), { week: 53, year: 2020 });
  assert.deepEqual(isoWeek(new Date(2021, 0, 4)), { week: 1, year: 2021 });
  assert.deepEqual(isoWeek(new Date(2027, 0, 1)), { week: 53, year: 2026 });
});

test('date-only values remain local calendar dates', () => {
  const date = parseLocalDate('2028-02-29');
  assert.equal(date.getFullYear(), 2028);
  assert.equal(date.getMonth(), 1);
  assert.equal(date.getDate(), 29);
});
