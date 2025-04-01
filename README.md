# Project Setup Guide

Follow the steps below to set up the project on your local machine.

## Prerequisites
- Node.js installed on your system
- Git installed on your system

## Steps to Set Up

### 1. Clone the Repository
```bash
git clone <repository-url>
cd <repository-folder>
```

### 2. Backend Setup
1. Navigate to the backend directory:
    ```bash
    cd backend
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Create a `.env` file in the `backend` directory with the following content:
    ```
    BASE_URL=https://api.nytimes.com/svc/search/v2/articlesearch.json 
    API_KEY=your-api-key
    ```

### 3. Frontend Setup
1. Navigate to the frontend directory:
    ```bash
    cd frontend
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Create a `.env` file in the `frontend` directory with the following content:
    ```
    VITE_BASE_URL=http://localhost:5000
    ```

### 4. Run the Application
- Start the backend server:
  ```bash
  cd backend
  node server.mjs
  ```
- Start the frontend development server:
  ```bash
  cd frontend
  npm run dev
  ```

Now the application should be running locally.

## Notes
- Replace `your-api-key` with your actual API keys.
- Ensure the backend server is running before starting the frontend.
