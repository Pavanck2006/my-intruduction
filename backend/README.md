# MyPortfolio API

The backend runs independently from the React frontend. Backend dependencies
and code belong in this directory; the frontend package is not used by these
commands.

## Setup

```powershell
cd backend
npm install
Copy-Item .env.example .env
npm run dev
```

Set `CLIENT_URL` and `PORT` in `.env` as needed. MongoDB and JWT configuration
will be added in their implementation phases. Do not commit `.env` or put
credentials in `.env.example`.

The setup currently exposes `GET /api/health` as a process health check. It
does not yet connect to MongoDB or implement portfolio APIs.
