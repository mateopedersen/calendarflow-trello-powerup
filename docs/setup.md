# Setup and Deployment

## Local static preview

Use Node.js 18+ or Python 3 to serve the repository root. Open `/src/planner.html?demo=1` to review clearly labeled sample data. Never use the demo data as evidence of a live Trello integration.

## GitHub Pages

The project includes a GitHub Actions workflow to publish the static site. First create the requested repository `calendarflow-trello-powerup` in the owner's GitHub account and push this source. Enable GitHub Pages with GitHub Actions in repository settings. After deployment, verify these URLs over HTTPS:

- `/src/index.html` (connector)
- `/src/planner.html`
- `/docs/privacy.html`
- `/docs/support.html`
- `/docs/user-guide.html`
- `/src/assets/calendarflow-icon.svg`

Use `/src/index.html` as the Trello connector URL. Since connector and docs are in one static site, the relative privacy and support links resolve from their paths.

## Security headers

GitHub Pages does not let a repository set custom response headers. Verify that its hosting policy permits Trello iframe embedding and that the Trello client script loads. If frame restrictions prevent Trello from embedding the connector, use an existing authorized free host that supports the required headers. Do not add a paid plan without the owner's approval.
