# Release Checklist

- [x] Implement read-only Power-Up connector and planner.
- [x] Add month, week, year, deadline insights, heatmap, local CSV/ICS, print controls, and optional resources.
- [x] Add original SVG app icon and documentation.
- [x] Add boundary/export unit tests; 10/10 passed in the recorded run.
- [x] Publish source to the approved public GitHub repository.
- [x] Enable GitHub Pages Actions and deploy a public mirror of the site and help pages.
- [x] Create Trello app `6ac7553081b7246032038717` in Mateo Pedersen's workspace.
- [x] Save connector URL, icon, support details, author, and two categories.
- [x] Select implemented capabilities: `board-buttons`, `on-enable`, `show-settings`.
- [x] Save English directory listing draft and public privacy URL.
- [x] Save the expanded English listing in the Trello admin portal, including monthly and insights PNG previews built with synthetic sample data.
- [x] Receive Trello review feedback requesting a fuller overview/description with visuals and a Content-Security-Policy for the connector.
- [x] Deploy the connector to Cloudflare Pages at `https://calendarflow-trello-powerup.pages.dev/src/index.html`; the repository `_headers` file is applied.
- [x] Verify the CSP and related headers at the registered connector URL. SecurityHeaders reports A+ and detects the CSP; retest the Power-Up on the private QA board and confirm the planner loads its cards from the Cloudflare URL.
- [x] Create a private QA board and add the app after the user explicitly approved Trello's displayed access notice for that board.
- [x] Verify iframe startup, onboarding, toolbar, current board card/list reading, month/week/year, insights, resources, and settings with synthetic QA cards.
- [ ] Verify actual browser download output for CSV and ICS.
- [ ] Verify native print dialog and saved PDF output.
- [ ] Resolve why Trello's add flow grants/displays `board:write` and `organization:write` although the connector code uses read APIs only.
- [ ] Replace or supplement illustrative previews with actual product screenshots if Trello requests captured screenshots specifically.
- [ ] Confirm the Joint Developer's Agreement status with Trello; the owner reports receiving no separate agreement-signing email, while the review team has already tested the app.
- [x] Reply in ticket ECOHELP-172192 to request re-review after both requested changes went live.
- [ ] Record the re-review response and current status.
- [ ] Verify an approved public directory page and rendered links if Trello approves the listing.

The source repo is public, and both GitHub Pages and Cloudflare Pages are live. The expanded listing and its PNG previews are saved; CSP and related headers are verified on the registered Cloudflare connector, and a re-review request is pending. App registration and a working hosted connector do not mean Trello has approved or published the Power-Up.
