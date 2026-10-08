import { addMonths, cardsOnDay, dateKey, formatDate, isoWeek, localDayKey, monthGrid, weekStart } from './calendar.js';
import { monthlyCounts, summarize } from './analytics.js';
import { toCsv, toIcs } from './exports.js';

const params = new URLSearchParams(location.search);
const demo = params.get('demo') === '1';
const now = new Date();
let shown = new Date(now.getFullYear(), now.getMonth(), 1);
let view = 'month';
let selected = dateKey(now);
let weekStartsOn = localStorage.getItem('calendarflow-week-start') === '0' ? 0 : 1;
let cards = [];
let lists = new Map();
let trello;
const $ = (s) => document.querySelector(s);
const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
const monthTitle = () => new Intl.DateTimeFormat(undefined, { month: 'long', year: 'numeric' }).format(shown);
const weekDays = (starts) => Array.from({ length: 7 }, (_, i) => new Intl.DateTimeFormat(undefined, { weekday: 'short' }).format(new Date(2024, 0, 7 + ((starts + i) % 7))));
const cardHref = (c) => c.url ? `<a class="card-link" href="${esc(c.url)}" target="_blank" rel="noopener noreferrer">${esc(c.name)}</a>` : `<span class="card-link">${esc(c.name)}</span>`;

const sampleCards = [
  { id: 'demo-1', name: 'Prepare launch checklist', due: new Date(now.getFullYear(), now.getMonth(), Math.min(now.getDate() + 1, 28), 15).toISOString(), start: null, dueComplete: false, labels: [{ name: 'Launch', color: 'green' }], idList: 'demo-list', url: '' },
  { id: 'demo-2', name: 'Review project milestones', due: new Date(now.getFullYear(), now.getMonth(), Math.min(now.getDate() + 4, 28), 12).toISOString(), start: null, dueComplete: true, labels: [{ name: 'Planning', color: 'blue' }], idList: 'demo-list', url: '' },
  { id: 'demo-3', name: 'Share stakeholder update', due: new Date(now.getFullYear(), now.getMonth(), Math.min(now.getDate() + 8, 28), 16).toISOString(), start: null, dueComplete: false, labels: [{ name: 'Comms', color: 'purple' }], idList: 'demo-list', url: '' },
  { id: 'demo-4', name: 'Capture next sprint ideas', due: null, start: null, dueComplete: false, labels: [], idList: 'demo-list', url: '' },
];

async function loadBoard() {
  if (demo) { cards = sampleCards; lists = new Map([['demo-list', 'Example board']]); return; }
  if (!window.TrelloPowerUp) throw new Error('Open CalendarFlow from a Trello board to load its cards.');
  trello = window.TrelloPowerUp.iframe();
  const [rawCards, rawLists] = await Promise.all([
    trello.cards('id', 'name', 'start', 'due', 'dueComplete', 'url', 'labels', 'idList'),
    trello.lists('id', 'name')
  ]);
  lists = new Map(rawLists.map((l) => [l.id, l.name]));
  cards = rawCards.map((card) => ({ ...card, listName: lists.get(card.idList) || '' }));
}

function renderCard(c, compact = false) {
  const tags = (c.labels || []).filter((l) => l.name).map((l) => `<span class="label-tag label-${esc(l.color || 'gray')}">${esc(l.name)}</span>`).join('');
  const status = c.dueComplete ? '<span class="status complete">Complete</span>' : c.due && localDayKey(c.due) < dateKey(now) ? '<span class="status overdue">Overdue</span>' : '';
  return `<article class="event ${c.dueComplete ? 'is-complete' : ''} ${c.due && localDayKey(c.due) < dateKey(now) && !c.dueComplete ? 'is-overdue' : ''}">${compact ? '' : `<div class="event-meta">${status}<span>${esc(lists.get(c.idList) || '')}</span></div>`}${cardHref(c)}${compact ? '' : `<div class="event-foot">${tags}<span>${c.due ? esc(formatDate(c.due)) : 'No due date'}</span></div>`}</article>`;
}

function renderMonth() {
  const labels = weekDays(weekStartsOn).map((d) => `<div class="weekday">${esc(d)}</div>`).join('');
  const grid = monthGrid(shown.getFullYear(), shown.getMonth(), weekStartsOn).map(({ date, key, inMonth }, i) => {
    const dayCards = cardsOnDay(cards, key);
    const week = i % 7 === 0 ? `<span class="week-number">${isoWeek(date).week}</span>` : '';
    return `<button class="day-cell ${inMonth ? '' : 'outside'} ${key === dateKey(now) ? 'today' : ''} ${key === selected ? 'selected' : ''}" data-day="${key}" aria-label="${esc(formatDate(date))}, ${dayCards.length} cards"><span class="day-number">${date.getDate()}${week}</span><span class="day-events">${dayCards.slice(0, 3).map((c) => { const color = ({ green: 'green', blue: 'blue', purple: 'purple', red: 'red', yellow: 'yellow', orange: 'orange', sky: 'sky', lime: 'lime', pink: 'pink', black: 'black' })[(c.labels || []).find((x) => x.color)?.color] || 'gray'; const label = (c.labels || []).find((x) => x.name)?.name || ''; return `<span class="mini-event ${c.dueComplete ? 'done' : ''} mini-${color}" title="${esc(label ? `${c.name} · ${label}` : c.name)}">${esc(c.name)}</span>`; }).join('')}${dayCards.length > 3 ? `<span class="more-events">+${dayCards.length - 3} more</span>` : ''}</span></button>`;
  }).join('');
  const selectedDate = new Date(`${selected}T12:00:00`);
  return `<div class="calendar-grid month-grid">${labels}${grid}</div><aside class="selected-day"><div><span class="eyebrow">SELECTED DAY</span><h3>${esc(formatDate(selectedDate))}</h3></div><div class="selected-list">${cardsOnDay(cards, selected).length ? cardsOnDay(cards, selected).map((c) => renderCard(c)).join('') : '<p class="empty">No cards start or are due on this day.</p>'}</div></aside>`;
}

function renderWeek() {
  const monday = weekStart(new Date(`${selected}T12:00:00`), weekStartsOn);
  return `<div class="week-layout">${Array.from({ length: 7 }, (_, i) => {
    const d = new Date(monday.getFullYear(), monday.getMonth(), monday.getDate() + i);
    const key = dateKey(d); const week = isoWeek(d);
    return `<section class="week-day ${key === dateKey(now) ? 'today' : ''}"><header><span class="eyebrow">${i === 0 ? `WEEK ${week.week}` : '&nbsp;'}</span><h3>${esc(new Intl.DateTimeFormat(undefined, { weekday: 'long' }).format(d))}</h3><time>${d.getDate()} ${esc(new Intl.DateTimeFormat(undefined, { month: 'short' }).format(d))}</time></header><div class="day-card-list">${cardsOnDay(cards, key).map((c) => renderCard(c)).join('') || '<span class="empty">No cards</span>'}</div></section>`;
  }).join('')}</div>`;
}

function renderYear() {
  return `<div class="year-grid">${Array.from({ length: 12 }, (_, month) => {
    const cells = monthGrid(shown.getFullYear(), month, weekStartsOn);
    const counts = monthlyCounts(cards, shown.getFullYear());
    return `<button class="year-month" data-month="${month}"><header><strong>${esc(new Intl.DateTimeFormat(undefined, { month: 'long' }).format(new Date(shown.getFullYear(), month, 1)))}</strong><span>${counts[month]} deadlines</span></header><div class="year-dots">${cells.filter((c) => c.inMonth).map((c) => { const count = cardsOnDay(cards, c.key).length; return `<i class="heat-${Math.min(count, 4)}" title="${count} cards on ${c.key}"></i>`; }).join('')}</div></button>`;
  }).join('')}</div>`;
}

function renderInsights() {
  const stats = summarize(cards, now); const counts = monthlyCounts(cards, shown.getFullYear()); const max = Math.max(1, ...counts);
  const metrics = [['Deadlines', stats.withDue], ['Completed', stats.completed], ['Overdue', stats.overdue], ['Upcoming', stats.upcoming], ['No due date', stats.missing]];
  return `<div class="insights"><div class="metrics">${metrics.map(([name, value]) => `<article class="metric"><span>${name}</span><strong>${value}</strong></article>`).join('')}</div><section class="panel"><div class="panel-heading"><div><span class="eyebrow">DEADLINE DISTRIBUTION</span><h3>${shown.getFullYear()} by month</h3></div><span class="legend">Count of cards with a due date · darker = more deadlines</span></div><div class="heatmap">${counts.map((count, i) => `<div class="heat-row"><span>${esc(new Intl.DateTimeFormat(undefined, { month: 'short' }).format(new Date(shown.getFullYear(), i, 1)))}</span><div class="heat-track"><i class="heat-fill heat-${Math.ceil(count / max * 4)}" style="width:${Math.max(3, count / max * 100)}%"></i></div><b>${count}</b></div>`).join('')}</div><p class="footnote">These counts show cards per date range. They do not estimate effort or project workload.</p></section><section class="panel"><div class="panel-heading"><div><span class="eyebrow">DEADLINE CHECKLIST</span><h3>Cards with due dates</h3></div></div><div class="checklist">${cards.filter((c) => c.due).sort((a,b) => new Date(a.due)-new Date(b.due)).slice(0, 30).map((c) => renderCard(c)).join('') || '<p class="empty">No cards with due dates.</p>'}</div></section></div>`;
}

function renderResources() {
  const resources = [
    ['Monthly calendar collection', 'https://www.betacalendars.com/monthly-calendar', 'Dated monthly calendars and printable layouts'],
    ['Blank calendar templates', 'https://www.betacalendars.com/blank-calendar', 'A clean monthly sheet for your own notes'],
    ['Weekly calendar templates', 'https://www.betacalendars.com/weekly-calendar', 'A ready-made weekly planning template'],
    ['Monthly planner templates', 'https://www.betacalendars.com/monthly-planner', 'A printable monthly planning page'],
  ];
  const year = shown.getFullYear(), month = shown.getMonth();
  const verified = year === 2026 && month >= 9 && month <= 11 || year === 2027 && month >= 0 && month <= 6;
  const mismatch = year === 2027 && (month === 7 || month === 8);
  const slug = new Intl.DateTimeFormat('en', { month: 'long' }).format(new Date(year, month, 1)).toLowerCase();
  const datedUrl = `https://www.betacalendars.com/${slug}-calendar.html`;
  const datedTitle = `${new Intl.DateTimeFormat(undefined, { month: 'long' }).format(new Date(year, month, 1))} ${year} calendar`;
  return `<div class="resource-page"><div class="resource-intro"><span class="eyebrow">OPTIONAL · OPENS EXTERNALLY</span><h2>Printable Calendar Resources</h2><p>Find a blank planning sheet or a clean printable calendar for your selected month. Trello card details are never included in these links.</p></div>${verified ? `<article class="resource-card featured-resource"><div><span class="eyebrow">VERIFIED DATED RESOURCE</span><h3>${esc(datedTitle)}</h3><p>Page heading verified for this year on Beta Calendars. Resource content may change over time.</p></div><a class="button primary" href="${datedUrl}" target="_blank" rel="noopener noreferrer">Open ${esc(datedTitle)} ↗</a></article>` : mismatch ? '<p class="resource-note">The dated August and September 2027 pages have conflicting year text, so no dated link is shown for these months.</p>' : ''}<div class="resource-grid">${resources.map(([title, url, note]) => `<article class="resource-card"><span class="resource-icon">↗</span><h3>${esc(title)}</h3><p>${esc(note)}</p><a href="${url}" target="_blank" rel="noopener noreferrer">Visit Beta Calendars ↗</a></article>`).join('')}</div></div>`;
}

function render() {
  if ([...yearSelect.options].some((option) => Number(option.value) === shown.getFullYear())) yearSelect.value = shown.getFullYear();
  $('#period').textContent = view === 'week' ? `Week of ${formatDate(weekStart(new Date(`${selected}T12:00:00`), weekStartsOn))}` : view === 'year' ? String(shown.getFullYear()) : monthTitle();
  $('#today').hidden = false;
  document.querySelectorAll('[data-view]').forEach((b) => b.classList.toggle('active', b.dataset.view === view));
  $('#board-name').textContent = demo ? 'Example board · sample cards' : 'Current Trello board';
  $('#content').innerHTML = view === 'month' ? renderMonth() : view === 'week' ? renderWeek() : view === 'year' ? renderYear() : view === 'insights' ? renderInsights() : renderResources();
  $('#content').classList.toggle('print-calendar', ['month','week','year'].includes(view));
  $('#print-title').textContent = `${view === 'year' ? shown.getFullYear() : monthTitle()} · ${view[0].toUpperCase()}${view.slice(1)} planner`;
  $('#print-board').textContent = $('#board-name').textContent;
}

function download(name, content, type) {
  const blob = new Blob([content], { type }); const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = name; a.click(); URL.revokeObjectURL(a.href);
}

document.querySelectorAll('[data-view]').forEach((b) => b.addEventListener('click', () => { view = b.dataset.view; render(); }));
$('#previous').addEventListener('click', () => { const n = addMonths(shown.getFullYear(), shown.getMonth(), view === 'year' ? -12 : -1); shown = new Date(n.year, n.month, 1); render(); });
$('#next').addEventListener('click', () => { const n = addMonths(shown.getFullYear(), shown.getMonth(), view === 'year' ? 12 : 1); shown = new Date(n.year, n.month, 1); render(); });
$('#today').addEventListener('click', () => { shown = new Date(now.getFullYear(), now.getMonth(), 1); selected = dateKey(now); render(); });
$('#content').addEventListener('click', (event) => {
  const day = event.target.closest('[data-day]'); if (day) { selected = day.dataset.day; render(); }
  const month = event.target.closest('[data-month]'); if (month) { shown = new Date(shown.getFullYear(), Number(month.dataset.month), 1); view = 'month'; render(); }
});
$('#export-csv').addEventListener('click', () => download('calendarflow-deadlines.csv', toCsv(cards), 'text/csv;charset=utf-8'));
$('#export-ics').addEventListener('click', () => download('calendarflow-deadlines.ics', toIcs(cards), 'text/calendar;charset=utf-8'));
$('#print').addEventListener('click', () => window.print());
$('#week-start').addEventListener('change', (e) => { weekStartsOn = Number(e.target.value); localStorage.setItem('calendarflow-week-start', String(weekStartsOn)); render(); });
$('#year-select').addEventListener('change', (e) => { shown = new Date(Number(e.target.value), shown.getMonth(), 1); render(); });
const printPage = document.createElement('style'); document.head.append(printPage);
function updatePrintPage() { printPage.textContent = `@page{size:${$('#paper-size').value === 'letter' ? 'letter' : 'A4'} ${$('#orientation').value};margin:10mm}`; }
$('#paper-size').addEventListener('change', updatePrintPage);
$('#orientation').addEventListener('change', updatePrintPage);
$('#show-titles').addEventListener('change', (e) => document.documentElement.classList.toggle('hide-titles', !e.target.checked));
$('#monochrome').addEventListener('change', (e) => document.documentElement.classList.toggle('monochrome', e.target.checked));
updatePrintPage();

const yearSelect = $('#year-select');
for (let y = now.getFullYear() - 2; y <= now.getFullYear() + 8; y++) yearSelect.insertAdjacentHTML('beforeend', `<option value="${y}">${y}</option>`);
yearSelect.value = shown.getFullYear();
$('#week-start').value = String(weekStartsOn);
$('#content').dataset.loaded = 'true';
loadBoard().then(render).catch((error) => { $('#board-name').textContent = 'CalendarFlow'; $('#content').innerHTML = `<div class="error-state"><strong>Could not load this board.</strong><p>${esc(error.message || 'Please reopen CalendarFlow from the current Trello board.')}</p><p>Card data stays in the browser; nothing was sent to Beta Calendars.</p></div>`; });
