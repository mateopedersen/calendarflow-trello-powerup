# Release Checklist

- [x] Implement read-only Power-Up connector and planner.
- [x] Add month, week, year, deadline insights, heatmap, local CSV/ICS, print controls, and optional resources.
- [x] Add original SVG app icon and documentation.
- [x] Add boundary/export unit tests; 10/10 passed in the recorded run.
- [x] Publish source to the approved public GitHub repository.
- [x] Enable GitHub Pages Actions and deploy the HTTPS connector and public help pages.
- [x] Create Trello app `6ac7553081b7246032038717` in Mateo Pedersen's workspace.
- [x] Save connector URL, icon, support details, author, and two categories.
- [x] Select implemented capabilities: `board-buttons`, `on-enable`, `show-settings`.
- [x] Save English directory listing draft and public privacy URL.
- [ ] Save the revised English listing in the Trello admin portal, including the monthly and insights preview images.
- [x] Receive Trello review feedback requesting a fuller overview/description with visuals and a Content-Security-Policy for the connector.
- [ ] Deploy the connector on a host that sends custom HTTP response headers; GitHub Pages does not apply the prepared `_headers` rules.
- [ ] Verify the CSP and related headers at the exact registered connector URL, then retest the Power-Up on the private QA board.
- [x] Create a private QA board and add the app after the user explicitly approved Trello's displayed access notice for that board.
- [x] Verify iframe startup, onboarding, toolbar, current board card/list reading, month/week/year, insights, resources, and settings with synthetic QA cards.
- [ ] Verify actual browser download output for CSV and ICS.
- [ ] Verify native print dialog and saved PDF output.
- [ ] Resolve why Trello's add flow grants/displays `board:write` and `organization:write` although the connector code uses read APIs only.
- [ ] Replace or supplement illustrative previews with actual product screenshots if Trello requests captured screenshots specifically.
- [ ] Confirm the Joint Developer's Agreement status with Trello; the owner reports receiving no separate agreement-signing email, while the review team has already tested the app.
- [ ] Reply to the review team to request re-review after both requested changes are live.
- [ ] Record the re-review response and current status.
- [ ] Verify an approved public directory page and rendered links if Trello approves the listing.

The source repo is public and GitHub Pages is live. Trello has returned review feedback; the requested changes and re-review remain outstanding. App registration and a working hosted connector do not mean Trello has approved or published the Power-Up.
