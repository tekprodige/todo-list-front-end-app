# Todo List App - Frontend

This repository contains the frontend for the Todo List application, built with **Next.js** and styled with **Tailwind CSS**. It communicates with the backend to display, create, update, and delete tasks.

## Features
- View all tasks with a summary of total and completed tasks.
- Add new tasks with a title and color.
- Edit tasks directly from the details page.
- Mark tasks as completed or not completed.
- Delete tasks.

## Prerequisites
Before setting up the project, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v16 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## Setup Instructions

### 1. Clone the Repository
```bash
git clone <frontend-repo-url>
cd <frontend-repo-directory>
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
```

### 3. Configure Environment Variables
Create a .env.local file in the root of the project and add the following:
```bash
NEXT_PUBLIC_API_URL=http://localhost:4000/api
```
This NEXT_PUBLIC_API_URL should point to the backend API.

### 4. Start the Development Server
Run the development server:
```bash
npm run dev
# or
yarn dev
```
The frontend should now be running at http://localhost:3000.

### 5. Usage
- Navigate to http://localhost:3000 in your browser.
- Ensure the backend is running before interacting with the application.

### Scripts
- npm run dev: Start the development server.
- npm run build: Build the project for production.
- npm run start: Start the production server.

### Tech Stack
- Framework: Next.js (App Router)
- Styling: Tailwind CSS
- State Management: React's built-in state and hooks
- HTTP Client: Axios