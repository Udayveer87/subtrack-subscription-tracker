# SubTrack — Subscription Manager

A full-stack subscription tracker. Register, log in, and manage recurring subscriptions from a dashboard — see total monthly cost, upcoming renewals, and mark subscriptions as paid or delete them.

## Screenshots

**Login**
<img width="1280" height="740" alt="testproj-login" src="https://github.com/user-attachments/assets/c474c1c0-71ab-4405-b476-6f04089583f5" />

**Dashboard**
<img width="1280" height="900" alt="testproj-home" src="https://github.com/user-attachments/assets/6d110bbb-20ab-44f8-83bc-990303d421bd" />

## Tech Stack

Node.js, Express, Mongoose (MongoDB) · HTML/CSS/JS frontend

## Features

- Register / login
- Add, view, and delete subscriptions
- Monthly cost, active count, and "expiring soon" stats
- Category filtering

## Setup

```bash
npm install
node server.js
```

Visit `http://localhost:3000/login.html`. Requires MongoDB running locally (`mongodb://127.0.0.1:27017/subtrack`).
