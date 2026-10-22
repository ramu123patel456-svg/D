# SITEFORGE Campus Portal — Sprint 1 Demo

A runnable first-stage design prototype for the proposed Vasantrao Sakharam Sanas Jr. College website.

## What is included

- Responsive homepage with maroon, cream and green design direction
- Navigation links that scroll to sections
- Academics, calendar preview, notices, admissions information and contact sections
- Demo information modal
- Express API with `/api/health` and `/api/demo-data`
- Windows one-click launcher: `RUN.bat`

## Important limitations

This is **Sprint 1 only**, not the complete college portal. It does not yet include real authentication, admin CRUD, student accounts, application submission, private document upload, Firebase integration or production security configuration.

All dates, notices, streams, contact details and imagery are illustrative placeholders. No application form collects data. The website is not an official college website. Do not enter real student information or publish this demo as the college's official website without authorization.

## Requirements

- Windows 10/11 (or any OS with Node.js)
- Node.js LTS and npm
- Internet connection for the first dependency installation and remote illustrative images/fonts

## Run on Windows

1. Extract the ZIP to a normal folder (not inside the ZIP preview).
2. Install Node.js LTS if it is not installed: https://nodejs.org/
3. Double-click `RUN.bat`.
4. On first run, wait for `npm install` to finish.
5. Open `http://127.0.0.1:5173` in your browser.
6. API health endpoint: `http://127.0.0.1:3001/api/health`.

Keep the terminal window open while using the demo. Press `Ctrl+C` in that window to stop it.

## Run manually

```bash
npm install
npm run dev
```

## Build frontend

```bash
npm install
npm run build
```

The production frontend output is generated in `dist/`. The provided Express API is a local development API and is not configured to host the production frontend.

## Ports

- Vite frontend: `127.0.0.1:5173`
- Demo API: `127.0.0.1:3001`

## Next planned milestone

- Add real routing and separate page components
- Add Firebase development project configuration
- Add verified-token middleware and role-based authorization
- Add admin event/notice CRUD
- Add student account approval workflow
- Add admissions workflow and private document access
- Add tests, security rules and deployment configuration


### Startup fix (Windows)
`RUN.bat` checks whether `concurrently` is present and runs `npm install --include=dev` if it is missing, so the frontend and demo API can start together. If Windows still reports a missing command, open Command Prompt in this project folder and run `npm install --include=dev`, then retry `RUN.bat`.
