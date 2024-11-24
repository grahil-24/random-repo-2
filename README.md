# To-Do List Application

This task is a simple To-Do List application with a focus on the back-end, built using **Node.js**, **Express**, and **MongoDB**. The front-end (developed in ReactJS) serves primarily to test the back-end APIs.

---

## Features

1. **Create a To-Do Item**  
   API to create a new to-do item with a title and optional description.

2. **Get a To-Do by ID**  
   API to fetch a specific to-do item using its unique ID.

3. **Delete a To-Do by ID**  
   API to delete a specific to-do item using its unique ID.

4. **Get All To-Dos**  
   API to fetch the entire list of to-dos.

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your system.
- [MongoDB](https://www.mongodb.com/) installed and running.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/grahil-24/random-repo-2.git
   cd random-repo-2

2. Install dependencies:
   ```bash
   npm install

3. Create a .env file in the root directory and add your MongoDB connection string:
   ```bash
   MONGO_URI=mongodb://localhost:27017/to-do-list
   PORT=3000
   
4. Start the server
   ```bash
   npm start
   ```

---

## API Endpoints
Base URL: http://localhost:3000
1. Create a To-Do

   - Endpoint: POST /api/todos
   -  Body:
      ```bash
      {
        "title": "Sample Todo",
        "description": "This is a sample todo description."
      }
      ```
   -  Response:
      ```bash
      {
        "_id": "64a0f67b42e1b41234567890",
        "title": "Sample Todo",
        "description": "This is a sample todo description.",
        "createdAt": "2024-11-24T12:34:56.789Z"
      }
      ```

2. Get To-Do by ID

   - Endpoint: GET /api/todos/:id
   -  Response:
      ```bash
      {
        "_id": "64a0f67b42e1b41234567890",
        "title": "Sample Todo",
        "description": "This is a sample todo description.",
        "createdAt": "2024-11-24T12:34:56.789Z"
      }
      ```

3. Delete a To-Do

   - Endpoint: DELETE /api/todos/:id
   -  Response:
      ```bash
      {
        "message": "Todo deleted successfully."  
      }

      ```

4. Get All To-Dos

   - Endpoint: GET /api/todos/:id
   -  Response:
      ```bash
      [
        {
        "_id": "64a0f67b42e1b41234567890",
        "title": "Sample Todo",
        "description": "This is a sample todo description.",
        "createdAt": "2024-11-24T12:34:56.789Z"
        }
      ]

      ```

---

### Front-End (React)

For testing, use any HTTP client (e.g., Postman) or create a basic React application with forms to interact with the APIs.
