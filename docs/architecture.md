# Architecture

```text
Trello board
  └─ Trello Power-Up connector (board-buttons, on-enable, show-settings)
      └─ planner iframe
          ├─ Trello Power-Up Client Library → visible current-board cards/lists
          ├─ local calendar/date and analytics modules
          ├─ browser-local CSV and iCalendar generation
          └─ browser print styles / optional user-clicked resource links
```

The first release is static and read-only. It has no app server, API key, OAuth flow, analytics, remote calendar feed, or board-data storage. `src/calendar.js` contains local Gregorian calendar calculations. `src/analytics.js` defines deadline count rules. `src/exports.js` handles CSV formula protection and RFC-style iCalendar escaping/line folding. The browser UI is implemented in `src/planner.js` and styled for responsive and print layouts.

## Trello integration

The connector requests one board-level entry point. The planner calls `t.cards()` and `t.lists()` for the active board, with explicit fields. Trello documents that visible cards exclude archived cards and cards in archived lists. There are no card write methods.
