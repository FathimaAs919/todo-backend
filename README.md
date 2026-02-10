# To-Do List Backend API

This is the backend for a full-stack To-Do List application built using Node.js, Express.js, and PostgreSQL.
It provides RESTful APIs to manage tasks and connects with a React frontend.

## 🚀 Live Backend URL
https://todo-backend-kxud.onrender.com/api/tasks

## 🛠 Tech Stack
- Node.js
- Express.js
- PostgreSQL
- Sequelize / Prisma / Raw SQL
- dotenv
- Deployed on Render

## ✨ Features
- Create a new task
- Get all tasks
- Mark task as completed
- Delete a task
- Environment variable support
- Basic validation

## 📌 API Endpoints

| Method | Endpoint           | Description        |
|------|--------------------|--------------------|
| GET  | /api/tasks         | Get all tasks      |
| POST | /api/tasks         | Create a task      |
| PUT  | /api/tasks/:id     | Update a task      |
| DELETE | /api/tasks/:id   | Delete a task      |

## 📦 Run Locally

```bash
git clone https://github.com/your-username/todo-backend.git
cd todo-backend
npm install
npm start
