# CalendarFlow Privacy Notice

Updated 8 October 2026. See the public HTML version at <https://mateopedersen.github.io/calendarflow-trello-powerup/docs/privacy.html>.

CalendarFlow is a Trello Power-Up by Beta Calendars. Its planner reads visible cards on the current board through Trello's official Power-Up Client Library. It requests card IDs, titles, start and due dates, completion state, labels, list IDs, Trello URLs, and open list names to display calendar views, deadline summaries, and user-requested exports.

## Processing and storage

Board card data is processed in the planner iframe in the user's browser. CalendarFlow does not send card names, dates, labels, list names, board IDs, or Trello URLs to Beta Calendars, an analytics service, or an external print service. CSV and iCalendar files are generated locally after a user selects an export control. Printing uses the browser's print dialog. CalendarFlow has no backend and does not persist board data. The week-start preference is stored in local browser storage and contains no board data.

The connector loads Trello's official client library from `p.trellocdn.com`. The browser communicates with Trello/Atlassian to load the library and access the current board. CalendarFlow itself makes no external request containing board data. Optional Beta Calendars pages open only after a user clicks a link; no Trello details are added to those URLs. The destination site may receive ordinary request metadata and applies its own privacy practices.

## Permissions and removal

The registered app enables the board toolbar button, onboarding, and settings capabilities. The connector uses read operations for cards and lists and does not call Trello write methods. Trello's add-to-board notice nevertheless describes broader permission to access the board, add content and act on cards or lists, and view board members' basic identity details. The current Trello iframe permission context also reported board and organization write access. CalendarFlow does not use those write or member-profile abilities; this difference is being reviewed before public submission. Users should enable it only if they are comfortable with the permissions Trello displays.

CalendarFlow does not edit cards, due dates, descriptions, or board content, and does not store Trello member personal data. Disabling the Power-Up stops its board integration. The local week-start choice can be removed by clearing site data for the connector origin. There is no server-side board record to delete.

## Contact

For support or privacy questions, use the [Beta Calendars contact page](https://www.betacalendars.com/contact). Do not include private board or card information in a support request.
