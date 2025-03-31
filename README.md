# Fullstack Monorepo

This is a modern fullstack monorepo using Turborepo, featuring:
- Express backend with TypeScript
- Modern Angular frontend
- Workspace-based monorepo structure

## Project Structure

```
.
├── apps/
│   ├── backend/    # Express TypeScript API
│   └── frontend/   # Angular application
└── packages/       # Shared packages (if needed)
```

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the development servers:
```bash
npm run dev
```

This will start both the backend (port 3000) and frontend (port 4200) in development mode.

## Available Scripts

- `npm run dev`: Start all applications in development mode
- `npm run build`: Build all applications
- `npm run test`: Run tests across all applications
- `npm run lint`: Run linting across all applications

## Backend API

The backend runs on `http://localhost:3000` and provides a REST API.

## Frontend Application

The Angular frontend runs on `http://localhost:4200` and provides a modern web interface.
