# CalendarFlow Privacy Notice

**Status: draft for publication.** This notice describes the current source code as of 8 October 2026. It must be reviewed by Beta Calendars and published at its final HTTPS support domain before marketplace submission.

CalendarFlow is a read-only Trello Power-Up. When opened on a board, its planner asks Trello's official Power-Up Client Library for visible cards' IDs, titles, start and due dates, completion state, labels, list IDs, Trello URLs, and open list names. It uses these values only to render the current board's calendar, weekly planner, yearly overview, deadline summaries, and files the user explicitly exports.

## Processing and storage

Board card data is processed in the planner iframe in the user's browser. CalendarFlow does not send card names, dates, labels, list names, board IDs, or Trello URLs to Beta Calendars, an analytics service, or an external print service. CSV and iCalendar files are built locally and downloaded only after the user clicks an export control. Printing uses the browser's print dialog. CalendarFlow does not operate a backend and does not persist board data. The week-start preference is stored in browser local storage on the current browser profile. It contains no board data.

The connector loads Trello's official client library from `p.trellocdn.com` to communicate with Trello. The browser necessarily sends ordinary connection metadata to Trello/Atlassian when retrieving the library and reading Trello board data. The app itself makes no third-party request containing board data. Optional Beta Calendars pages open only after a user clicks a clearly labeled link. Those pages are governed by Beta Calendars' own privacy terms and may receive ordinary web request metadata; CalendarFlow does not append Trello data to those URLs.

## Permissions and removal

The initial version requests only the board-level `board-buttons`, `on-enable`, and `show-settings` capabilities and reads visible board card/list fields through the client library. It does not edit cards, due dates, descriptions, or board content. No personal data is stored by CalendarFlow. Disabling the Power-Up stops its board integration. The local week-start setting can be removed by clearing site data for the connector's origin or resetting browser storage. There is no server-side board-data record to delete.

## Contact

For support or privacy questions, use the [Beta Calendars contact page](https://www.betacalendars.com/contact). The contact page was located through the site's privacy page and navigation.
