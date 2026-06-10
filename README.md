# Workspace Reservation System SPA

## Overview

Workspace Reservation System is a Single Page Application (SPA) developed with JavaScript, Vite, TailwindCSS, and JSON Server.

The application allows users to authenticate, create workspace reservations, and manage reservations according to their role. Administrators can view all reservations, approve or reject requests, and delete reservations, while regular users can only view and manage their own reservations.

---

## Features

### Authentication

* User login with email and password.
* Session persistence using Local Storage.
* Protected routes for authenticated users.
* Automatic redirection based on authentication status.

### Reservation Management

* Create new workspace reservations.
* View reservation details.
* Display reservation status:

  * Pending
  * Approved
  * Rejected

### Role-Based Access

#### Administrator

* View all reservations.
* Approve reservations.
* Reject reservations.
* Delete reservations.

#### User

* View only their own reservations.
* Create new reservations.

### Navigation

* SPA routing without page reloads.
* Protected routes.
* Custom 404 page.

---

## Technologies Used

* JavaScript (ES Modules)
* Vite
* TailwindCSS
* JSON Server
* HTML5
* CSS3

---

## Project Structure

```text
src/
│
├── api/
│   └── http.js
│
├── components/
│   ├── ReservationCard.js
│   └── Sidebar.js
│
├── controllers/
│   ├── home.controller.js
│   ├── login.controller.js
│   └── reservation.controller.js
│
├── router/
│   └── router.js
│
├── services/
│   └── reservation.service.js
│
├── views/
│   ├── homeView.js
│   ├── loginView.js
│   ├── reservations.js
│   └── notFound.js
│
├── utils.js
├── style.css
└── main.js
```

---

## Installation

### Clone the Repository

```bash
git clone <repository-url>
cd project
```

### Install Dependencies

```bash
npm install
```

---

## Running the Project

Start the development server and the mock API:

```bash
npm run dev
```

This command runs:

* Vite Development Server
* JSON Server on Port 3001

---

## Mock API

JSON Server uses the `db.json` file as a fake backend.

### Base URL

```text
http://localhost:3001
```

### Available Resources

#### Users

```http
GET /users
```

#### Reservations

```http
GET    /reservations
POST   /reservations
PATCH  /reservations/:id
DELETE /reservations/:id
```

---

## Test Accounts

### Administrator

```text
Email: admin@jh.com
Password: J123456
```

### User

```text
Email: user@sh.com
Password: J123456
```

### User 2

```text
Email: user2@el.com
Password: J123456
```

---

## Application Flow

### Login

1. User enters credentials.
2. Application validates the user against the API.
3. User information is stored in Local Storage.
4. User is redirected to the Home page.

### Home

* Administrators can view all reservations.
* Regular users can view only their own reservations.

### Create Reservation

1. User completes the reservation form.
2. Reservation is stored through the API.
3. Reservation status is automatically set to **Pending**.

### Reservation Approval

Administrators can:

* Approve reservations.
* Reject reservations.
* Delete reservations.

---

## Route Protection

### Protected Routes

```text
/home
/reservations
```

Unauthenticated users attempting to access protected pages are automatically redirected to the login screen.

---

## Session Management

Session data is stored in Local Storage:

```javascript
localStorage.setItem("user", JSON.stringify(user));
```

### Available Utilities

* `saveSession()`
* `getSession()`
* `removeSession()`
* `isAuthenticated()`
* `isAdmin()`

---

## Future Improvements

* Reservation conflict validation.
* Advanced filtering and search.
* User registration.
* Password encryption.
* Responsive mobile design improvements.
* Reservation history.
* Real backend integration.
* Unit and integration testing.

---

## Author

Developed as a SPA architecture and JavaScript performance assessment project using Vite, TailwindCSS, and JSON Server.
