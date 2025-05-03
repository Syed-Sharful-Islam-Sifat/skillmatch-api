# SkillMatch API

A basic Express server setup for the SkillMatch application.

## Features

- Express server with common middleware
- CORS enabled
- Security headers with Helmet
- Request logging with Morgan
- JSON and URL-encoded body parsing
- Basic error handling
- 404 route handling

## Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

## Usage

### Development

To run the server in development mode with auto-restart:

```bash
npm run dev
```

### Production

To run the server in production mode:

```bash
npm start
```

## Environment Variables

- `PORT`: The port on which the server will run (default: 3000)
- `NODE_ENV`: The environment (development/production)

## API Endpoints

- `GET /`: Welcome message

## Project Structure

```
skillmatch-api/
├── src/
│   └── server.js
├── package.json
└── README.md
```