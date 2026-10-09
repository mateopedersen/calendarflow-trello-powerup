# CalendarFlow — Reviewer Test Guide

## App details

- **Power-Up:** CalendarFlow — Printable Project Planner
- **Power-Up ID:** `6ac7553081b7246032038717`
- **Connector:** <https://calendarflow-trello-powerup.pages.dev/src/index.html>
- **Source:** <https://github.com/mateopedersen/calendarflow-trello-powerup>
- **Privacy:** <https://calendarflow-trello-powerup.pages.dev/docs/privacy.html>
- **Support:** <https://calendarflow-trello-powerup.pages.dev/docs/support.html>
- **User guide:** <https://calendarflow-trello-powerup.pages.dev/docs/user-guide.html>
- **Capabilities:** `board-buttons`, `on-enable`, `show-settings`

## Reproduce the main features

Use a private scratch board with synthetic cards. Enable CalendarFlow and choose **Printable Calendar** from the board toolbar. The planner reads cards only from the active board.

Create four cards:

1. `Reviewer — overdue`: incomplete, due yesterday.
2. `Reviewer — upcoming`: incomplete, due tomorrow.
3. `Reviewer — complete`: marked complete, due today.
4. `Reviewer — no date`: no due date.

Open **Insights**. Expected counts are 3 cards with due dates, 1 completed due-date card, 1 overdue incomplete card, 1 upcoming incomplete card, and 1 card without a due date. The month distribution should include the three dated cards in the current month.

Switch among **Month**, **Week**, and **Year**. Verify the dated cards appear on their Trello dates and that the week view shows the selected week. Open **Settings** to select Monday-first or Sunday-first. Open **Resources** to see optional printable calendar links; those links do not include card or board details.

The planner also offers browser printing and local CSV/ICS controls. The source has automated date and export-format tests. Native print/PDF output and completed browser downloads have not yet been independently confirmed in the QA browser session.

## Data and permissions

Card and list values are read in the browser through the official Trello Power-Up Client Library. CalendarFlow does not call card or board write APIs and has no data backend. See the privacy notice for the broader permissions Trello displays during enablement: the consent notice includes board content/actions and basic board-member identity visibility, and the iframe context reported `board:write` and `organization:write`. This is broader than the operations the connector code uses and remains under review.

No private QA board URL or board ID is included here. Reviewers can create their own scratch board and use synthetic cards with the relative dates above.
