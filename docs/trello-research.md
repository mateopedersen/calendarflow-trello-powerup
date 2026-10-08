# Trello and Resource Research

Checked on 8 October 2026.

## Trello Power-Up requirements

- [Public Power-Up Guidelines](https://developer.atlassian.com/cloud/trello/guides/power-ups/public-power-up-guidelines/): the app should meet user expectations, respond quickly, avoid advertising, include accurate documentation, respect Trello's trademarks, and provide clear onboarding. CalendarFlow uses an original icon and no automatic navigation.
- [Submitting a Power-Up](https://developer.atlassian.com/cloud/trello/guides/power-ups/submitting-your-power-up/): an app must be registered in the admin portal; the Joint Developer's Agreement is required before review; submissions go through the developer support flow. Review is described as usually taking two or more weeks. Public listings require all fields, including Support Email and Privacy Policy.
- [Managing Apps](https://developer.atlassian.com/cloud/trello/guides/power-ups/managing-apps/): the app admin form collects the Power-Up choice, name, Workspace, email, support email, author, and iframe connector.
- [Listings](https://developer.atlassian.com/cloud/trello/guides/power-ups/listings/): Overview is plain text and Description supports Markdown. Only localize for languages the app supports.
- [Capabilities](https://developer.atlassian.com/cloud/trello/power-ups/capabilities/): capabilities enabled in the portal must have matching handlers in `TrelloPowerUp.initialize()`.
- [Accessing Trello Data](https://developer.atlassian.com/cloud/trello/power-ups/client-library/accessing-trello-data/): `t.cards()` returns visible/open cards, excluding archived cards and cards in archived lists; supported fields include start, due, dueComplete, URL, labels, and list ID. CalendarFlow requests only the fields it uses.

The source implements a board toolbar entry, enable onboarding, and settings. It uses read-only `t.cards()` and `t.lists()` access. It does not copy Trello's native Calendar view; its distinguishing work is browser printing, compact year view, deadline counts, and local export.

## Beta Calendars destinations

The collection pages were opened and their purpose checked:

- [Monthly calendar collection](https://www.betacalendars.com/monthly-calendar)
- [Blank calendar](https://www.betacalendars.com/blank-calendar)
- [Weekly calendar](https://www.betacalendars.com/weekly-calendar)
- [Monthly planner](https://www.betacalendars.com/monthly-planner)

The homepage showed a 2026 calendar page and October/November 2026 links. Dated pages were checked individually for October–December 2026 and January–September 2027. October 2026 through July 2027 contain matching dated copy. August and September 2027 have a 2027 heading but body text that describes 2026, so the app deliberately omits those dated links. The monthly planner navigator never includes Trello data in a URL.

## Limitations

The source identifies Trello's native calendar as an existing feature in Trello's ecosystem; this research did not exhaustively compare every marketplace competitor. App registration and in-Trello runtime behavior remain pending live Trello access and owner review of the agreement.
