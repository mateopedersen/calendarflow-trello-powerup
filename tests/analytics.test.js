import test from 'node:test';
import assert from 'node:assert/strict';
import { monthlyCounts, summarize } from '../src/analytics.js';

test('deadline summary excludes completed cards from overdue and upcoming counts', () => {
  const cards = [
    { due: '2026-10-07', dueComplete: false },
    { due: '2026-10-07', dueComplete: true },
    { due: '2026-10-08', dueComplete: false },
    { due: '2026-10-09', dueComplete: false },
    { due: null, dueComplete: false },
  ];
  assert.deepEqual(summarize(cards, new Date(2026, 9, 8, 12)), { total: 5, withDue: 4, completed: 1, overdue: 1, upcoming: 2, missing: 1 });
});

test('monthly deadline counts handle leap day and ignore other years', () => {
  const counts = monthlyCounts([{ due: '2028-02-29' }, { due: '2028-02-01T10:00:00Z' }, { due: '2027-02-28' }, { due: null }], 2028);
  assert.equal(counts[1], 2);
  assert.equal(counts.reduce((a, b) => a + b, 0), 2);
});
