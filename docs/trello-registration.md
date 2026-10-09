# Trello Registration Notes

## Created app

- Name: CalendarFlow — Printable Project Planner
- Power-Up ID: `6ac7553081b7246032038717`
- Workspace: Mateo Pedersen's workspace
- Author: Beta Calendars
- Type: uses Power-Up capabilities
- Connector: <https://mateopedersen.github.io/calendarflow-trello-powerup/src/index.html>
- Icon: <https://mateopedersen.github.io/calendarflow-trello-powerup/src/assets/calendarflow-icon.svg>
- Support contact: the verified account email `mateo@betacalendars.com`
- Privacy: <https://mateopedersen.github.io/calendarflow-trello-powerup/docs/privacy.html>
- Categories: IT & project management; Analytics & reporting
- Capabilities selected: `board-buttons`, `on-enable`, `show-settings`
- Listing language: English (US); revised listing draft prepared locally for portal update

## Review boundary

The registration is real, but the Power-Up is not publicly approved or listed. Trello's review team has tested the Power-Up and requested a fuller listing with visuals and a Content-Security-Policy for the connector. Once these changes are live, the owner can reply to request re-review. The current account owner reports receiving no separate agreement-signing email; confirm any remaining agreement requirement with Trello instead of assuming its status.

The user explicitly approved adding the app to the private QA board after Trello disclosed access to board content, permission to add content and act on cards/lists, and visibility into board members' basic identity details. The connector implementation reads cards and lists and does not call write APIs. Trello's iframe permission context nevertheless included `board:write` and `organization:write`; this scope mismatch should be resolved before public review.

Private QA verified iframe startup, onboarding, toolbar button, real board card/list reading, month/week/year views, insights, resources, and settings using synthetic cards. The print layout and controls displayed, but native print/PDF output was not confirmed. CSV and ICS controls were invoked, but the browser gave no visible download confirmation.

The review feedback came through the Atlassian Developer and Marketplace Support flow. No public listing or approval has been issued yet.
