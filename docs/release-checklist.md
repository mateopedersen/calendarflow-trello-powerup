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
- [x] Create a private QA board and add the app after the user explicitly approved Trello's displayed access notice for that board.
- [x] Verify iframe startup, onboarding, toolbar, current board card/list reading, month/week/year, insights, resources, and settings with synthetic QA cards.
- [ ] Verify actual browser download output for CSV and ICS.
- [ ] Verify native print dialog and saved PDF output.
- [ ] Resolve why Trello's add flow grants/displays `board:write` and `organization:write` although the connector code uses read APIs only.
- [ ] Produce marketplace assets from actual product screenshots and check the portal's current image requirements.
- [ ] Decide whether to create the Atlassian Ecosystem support portal account; the visible signup action agrees to its Privacy Policy and Notice and Disclaimer.
- [ ] Have the account owner review and decide whether to accept the Joint Developer's Agreement.
- [ ] Submit through Trello's current developer support flow after agreement and QA requirements are satisfied.
- [ ] Record the actual submission reference and review status.
- [ ] Verify an approved public directory page and rendered links if Trello approves the listing.

The source repo is public and Pages is live. App registration, a saved listing draft, and a working hosted connector do not mean Trello has approved or published the Power-Up.
