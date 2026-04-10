# Playwright CLI Google Demo

A simple demo project showing how to use **Playwright Test** and **Playwright CLI** to automate a browser, open `google.com`, and verify that the **Google** text is visible.

## Features

- ✅ Playwright test examples in both **TypeScript** and **JavaScript**
- ✅ Google page verification test
- ✅ Playwright CLI usage for browser automation
- ✅ Trace, screenshot, snapshot, and video artifact generation
- ✅ GitHub Actions workflow for automated test runs

## Project Structure

```text
PlayWright-CLI-Demo/
├── e2e/
│   ├── example.spec.ts
│   └── google.spec.ts
├── tests/
│   ├── example.spec.js
│   └── google.spec.js
├── .github/workflows/playwright.yml
├── playwright.config.ts
├── playwright.config.js
├── package.json
└── README.md
```

## Prerequisites

- **Node.js** 18+ recommended
- **npm**
- Internet connection for running tests against `https://www.google.com`

## Installation

```bash
npm install
npx playwright install
```

## Running the Tests

### TypeScript tests

```bash
npx playwright test --config=playwright.config.ts
```

Run the Google-specific TypeScript spec:

```bash
npx playwright test e2e/google.spec.ts --config=playwright.config.ts --project=chromium
```

### JavaScript tests

```bash
npx playwright test --config=playwright.config.js
```

Run the Google-specific JavaScript spec:

```bash
npx playwright test tests/google.spec.js --config=playwright.config.js --project=chromium
```

## Google Verification Test

The Google demo test checks:

- the page opens successfully
- the page title is `Google`
- the `Google` logo/image is visible

Example assertion:

```ts
await expect(page).toHaveTitle('Google');
await expect(page.getByRole('img', { name: 'Google' })).toBeVisible();
```

## Using Playwright CLI

This repo also demonstrates Playwright CLI usage for quick browser automation.

### Open Google

```bash
playwright-cli open https://www.google.com
```

### Capture a snapshot

```bash
playwright-cli snapshot --filename=google-snapshot.yaml
```

### Capture a screenshot

```bash
playwright-cli screenshot --filename=google.png
```

### Record a video

```bash
playwright-cli video-start google.webm
playwright-cli goto https://www.google.com
playwright-cli video-stop
```

### Record a trace with screenshots and snapshots

```bash
playwright-cli run-code "async page => { await page.context().tracing.start({ screenshots: true, snapshots: true }); }"
playwright-cli goto https://www.google.com
playwright-cli run-code "async page => { await page.context().tracing.stop({ path: 'trace1.zip' }); }"
```

## Generated Artifacts

When running the CLI capture flow, you can generate:

- `trace1.zip` — Playwright trace
- `google.webm` — video recording
- `google.png` — screenshot
- `google-snapshot.yaml` — page snapshot

## CI Workflow

GitHub Actions is configured in `.github/workflows/playwright.yml` to:

1. install dependencies
2. install Playwright browsers
3. run Playwright tests
4. upload the HTML report as an artifact

## Notes

- `playwright.config.ts` uses the `e2e/` directory
- `playwright.config.js` uses the `tests/` directory
- Browsers tested by default include Chromium, Firefox, and WebKit

## License

This project is provided for demo and learning purposes.
