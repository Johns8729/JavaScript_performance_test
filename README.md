# JavaScript_performance_test 
*Workspace Reservation System (SPA)**

## Overview

This project involves developing a Single Page Application (SPA) using JavaScript, Vite, Tailwind CSS, and a JSON server.

The application simulates a workspace reservation system where users can authenticate, navigate protected paths, and manage information consumed from a simulated API.

The main objective is to assess knowledge related to:

- SPA Architecture
- Authentication
- Role Management
- Path Protection
- Session Persistence
- API Consumption
- DOM Manipulation
- Code Modularization
- Development Best Practices

---

## Problem Context

A company has several shared workspaces:

- Meeting Rooms
- Private Offices
- Coworking Spaces
- Auditoriums

To avoid scheduling conflicts and improve internal organization, a platform is needed to manage reservations for these spaces.

The application must include two roles:

### Administrator (admin)

Can:

- View all reservations
- Create reservations
- Edit reservations
- Delete reservations
- Approve or reject reservations
- Manage workspaces
- Access administrative modules

### User (user)

Can:

- Check available spaces
- Create reservations
- View only their own reservations
- Modify pending reservations
- Cancel their own reservations

---

## Technologies used

- JavaScript ES6+
- Vite
- Tailwind CSS
- JSON Server
- Concurrently
- HTML5
- CSS3

---

## Delivered base structure

```txt
src
├── assets
├── components
│ └── Sidebar.js
├── controllers
│ └── login.controller.js
├── router
│ └── router.js
├── views
│ ├── loginView.js
│ ├── homeView.js
│ └── notFound.js
├── utils.js
├── main.js
└── style.css
```

---

## Architecture Explanation

### Components

Contains reusable interface components.

Example:

```txt
components/
└── Sidebar.js
```

The Sidebar can be reused in different views and centralizes the main system navigation.

### Controllers

Contain the application's business logic and events.

Example:

```txt
controllers/
└── login.controller.js
```

Responsibilities:

- Capture form events
- Validate credentials
- Consume the API
- Manage login
- Redirect users

### Views

Represent the application's screens.

Currently:

- Login
- Home
- Not Found (404)

Each view returns an HTML template that is dynamically rendered within the main container.

### Router

Manages the SPA's internal navigation.

Responsibilities:

- Render views
- Manage routes
- Protect private views
- Redirect users
- Display 404 pages

### Utils

Contains reusable helper functions.

Currently:

- Save session
- Get session
- Delete session
- Validate authentication

---

## Simulated API

The application uses JSON Server to simulate a REST API.

Example administrator user:

```json
{
"id": 1,
"email": "admin@test.com",
"password": "123456",
"role": "admin"
}
```

Example standard user:

```json
{
"id": 2,
"email": "user@test.com",
"password": "123456",
"role": "user"
}
```

---

## Environment Setup

Install dependencies:

```bash
npm install
```

Run project:

```bash
npm run dev
```

This command simultaneously starts:

- Vite
- JSON Server

thanks to the use of Concurrently.

---

## Suggested Scripts

```json
{
"scripts": {
"client": "vite",
"server": "json-server --watch db.json --port 3000",
"dev": "concurrently \"npm run client\" \"npm run server\""
}
}
```

---

## Test Credentials

Administrator:

```txt
admin@test.com
123456
```

User:

```txt
user@test.com
123456
```

---

## Included Basic Features

- Functional Login
- API Consumption via JSON Server
- Session Persistence with LocalStorage
- Logout
- SPA Router
- Basic Route Protection
- Reusable Sidebar
- Custom 404 Page
- Configuration of Tailwind CSS
- Vite Configuration

---

## Modules pending development

Coders must implement:

- Reservations CRUD
- Space CRUD
- Role Management
- Advanced Guards
- Permission Validations
- Administrative Dashboard
- Statistics
- Filters and Searches
- Notifications
- Business Rules

