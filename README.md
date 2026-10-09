# CalendarFlow — Printable Project Planner

CalendarFlow turns visible Trello board dates into a monthly calendar, a seven-day planner, a compact year overview, and deadline counts. It can print from the browser or download CSV and iCalendar files locally.

> **Review status (9 October 2026):** Trello's Power-Up Review Team tested CalendarFlow and returned two requested changes: expand the directory overview/description with useful visuals, and define a Content Security Policy for the connector. A revised listing draft and illustrative previews are being prepared. GitHub Pages cannot apply the required HTTP security headers, so the connector needs a header-capable static host before re-review. The Power-Up is not approved or listed. See [release checklist](docs/release-checklist.md).

## Features implemented

- Read-only current-board access through the official Trello Power-Up Client Library.
- Month view with start/due date indicators, labels, completion state, overdue markers, date details, and card links.
- Seven-day week planner and compact 12-month overview with deadline counts.
- Counts for cards with due dates, complete due-date cards, overdue incomplete cards, upcoming incomplete cards, and cards without due dates.
- Monthly deadline-density heatmap with count legend; it does not estimate effort.
- Browser print controls for A4/US Letter, portrait/landscape, card-title display, and monochrome. The browser print dialog creates any PDF.
- Local CSV and iCalendar downloads. CSV protects formula-leading cell values; iCalendar output escapes text and folds lines.
- Optional Beta Calendars resources. Dated resources for October–December 2026 and January–July 2027 were checked. August/September 2027 are excluded because those pages contain mismatched 2026 body copy.
- Demo data at `src/planner.html?demo=1`, explicitly labeled as example board data.

## Architecture

```text
Trello board toolbar → Power-Up connector → planner iframe
                                          ├─ Trello visible cards and open lists
                                          ├─ local calendar calculations / analytics
                                          ├─ browser-generated CSV / ICS
                                          └─ browser print view
```

No backend, Trello API key, OAuth token, analytics SDK, or external print service is used. See [architecture](docs/architecture.md) and [privacy](docs/privacy.html).

## Local preview

Serve this folder over HTTP, then open:

- `http://localhost:4173/src/planner.html?demo=1` — local sample preview.
- `http://localhost:4173/src/index.html` — connector landing page.

Start the server with `npm run serve` (or `python3 -m http.server 4173`). The Trello client connector requires HTTPS and a registered Power-Up ID when used inside Trello; local demo mode does not.

## Tests

Run `npm test` with Node.js 18 or later. The suite covers leap-year logic, month boundaries, Monday/Sunday grids, ISO week-year edges, date-only parsing, CSV escaping/formula protection, iCalendar escaping, UTC timestamps, all-day values, and RFC line folding.

## Permissions

Only board-level `board-buttons`, `on-enable`, and `show-settings` capabilities are implemented. The planner requests visible card fields (`id`, `name`, `start`, `due`, `dueComplete`, `url`, `labels`, `idList`) and open list `id`/`name` values for the current board. It does not write to Trello.

## Hosting and Trello setup

See [setup](docs/setup.md), [registration notes](docs/trello-registration.md), and [release checklist](docs/release-checklist.md). The source is public at [GitHub](https://github.com/mateopedersen/calendarflow-trello-powerup), and the live connector is hosted at [GitHub Pages](https://mateopedersen.github.io/calendarflow-trello-powerup/src/index.html).

## Support

- [Quick guide](docs/user-guide.html)
- [Privacy notice](docs/privacy.html)
- [Support](docs/support.html)
- [Reviewer test guide](docs/reviewer-guide.html)
- [Interactive sample planner](https://mateopedersen.github.io/calendarflow-trello-powerup/src/planner.html?demo=1)
- Beta Calendars [contact](https://www.betacalendars.com/contact)

## License

MIT. See [LICENSE](LICENSE).
