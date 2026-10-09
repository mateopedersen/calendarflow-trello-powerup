# Setup and Deployment

## Local static preview

Use Node.js 18+ or Python 3 to serve the repository root. Open `/src/planner.html?demo=1` to review clearly labeled sample data. Never use the demo data as evidence of a live Trello integration.

## Cloudflare Pages (primary Trello connector)

The `mateopedersen/calendarflow-trello-powerup` repository is connected to the Cloudflare Pages project `calendarflow-trello-powerup`. The GitHub App installation is limited to this repository. Production deploys from `main`; the project uses no framework or build command and serves the repository root. The root `_headers` file sets the Content-Security-Policy and related response headers.

- Trello connector: <https://calendarflow-trello-powerup.pages.dev/src/index.html>
- Planner: <https://calendarflow-trello-powerup.pages.dev/src/planner.html>
- Privacy: <https://calendarflow-trello-powerup.pages.dev/docs/privacy.html>
- Support: <https://calendarflow-trello-powerup.pages.dev/docs/support.html>
- User guide: <https://calendarflow-trello-powerup.pages.dev/docs/user-guide.html>
- Icon: <https://calendarflow-trello-powerup.pages.dev/src/assets/calendarflow-icon.svg>

Cloudflare Pages applies the response headers to the published files. The exact registered connector URL was scanned and received an [A+ SecurityHeaders report](https://securityheaders.com/?q=https%3A%2F%2Fcalendarflow-trello-powerup.pages.dev%2Fsrc%2Findex.html&followRedirects=on); the Power-Up was also reopened on the QA board from this host.

## GitHub Pages mirror

The repository's GitHub Actions workflow still publishes a mirror at `https://mateopedersen.github.io/calendarflow-trello-powerup/`. GitHub Pages does not apply the repository `_headers` file, so use the Cloudflare Pages URL as the Trello connector.
