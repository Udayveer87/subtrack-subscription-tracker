# SubTrack — Subscription Manager

A full-stack subscription tracking app. Users can register, log in, and manage their recurring subscriptions (add, view, update status, delete) from a dashboard.

## Tech Stack

- **Backend:** Node.js, Express, Mongoose (MongoDB)
- **Frontend:** Static HTML/CSS/JS (login, register, home dashboard, add-subscription pages)

## Features

- User registration and login
- Add a subscription (name, cost, renewal date, category)
- View all subscriptions for the logged-in user
- Update subscription status
- Delete a subscription

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | /api/register | Create a new user |
| POST | /api/login | Authenticate a user |
| POST | /api/subscriptions | Add a subscription |
| GET | /api/subscriptions/:email | Get subscriptions for a user |
| PUT | /api/subscriptions/:id | Update a subscription |
| DELETE | /api/subscriptions/:id | Delete a subscription |

## Setup

```bash
npm install
# Make sure MongoDB is running locally on mongodb://127.0.0.1:27017
node server.js
```

The app serves the frontend from /public and listens on http://localhost:3000.
