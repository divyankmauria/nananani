# Nana-nani

A React app called "Nana-nani" that helps people connect, chat, and seek advice in real time.

Nana-nani is a community-focused app for connecting people who need help with everyday tasks to trusted helpers. The current React client includes a landing page, navigation for browsing tasks and helpers, and starter routes for posting tasks, registering as a helper, and viewing task or helper details.

## Current App Experience

- Home page that introduces Nana-nani and explains the task-help flow
- Task posting route for people who need help
- Helper registration route for people who want to offer support
- Browse pages for tasks and helpers
- Detail pages for individual tasks and helper profiles
- Shared header and footer layout across the React app

## Product Direction

The goal is to grow Nana-nani into a real-time support platform where users can:

- Connect with helpers and community members
- Chat in real time
- Ask for advice or guidance
- Post tasks they need help with
- Discover people who can provide practical support

## Tech Stack

- React 18
- React Router
- Axios
- Framer Motion
- React Icons
- Express backend dependencies configured at the project root

## Project Structure

```text
nananani/
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
├── package.json
└── README.md
```

## Getting Started

Install root dependencies:

```sh
npm install
```

Install React client dependencies:

```sh
npm run install-client
```

Start the React development server:

```sh
npm run client
```

The React app runs through Create React App. The client is configured to proxy API requests to:

```text
http://localhost:5001
```

## Available Scripts

From the project root:

- `npm run client` starts the React client
- `npm run build` builds the React client for production
- `npm run install-client` installs dependencies inside `client`
- `npm start` starts the backend entry point configured in `package.json`
- `npm run dev` starts the backend with Nodemon

## Status

Nana-nani is in early development. Several app routes are scaffolded and marked as "Coming soon", with the foundation in place for task posting, helper discovery, and future real-time chat or advice features.
