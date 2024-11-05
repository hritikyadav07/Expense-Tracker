
# Expense Tracker

**Expense Tracker** is a user-friendly application designed to help users manage their personal finances by tracking daily, weekly, and monthly expenses. This tool provides a simple interface to log expenditures, categorize them, and visualize spending patterns over time, helping users stay on top of their budgeting goals.

## Key Features:
- **Expense Logging:** Add and categorize expenses easily.
- **Data Visualization:** Graphs and charts to view spending trends.
- **Custom Categories:** Create custom categories for better expense management.
- **User Authentication:** Secure login to track individual expenses.

## Technologies Used:
- **Frontend:** ReactJS - VITE
- **Backend:** NONE
- **Database:** NONE
- **Hosting:** NONE

## Task Distribution

### 1. **Backend Development** (RESTful API)
   - **Assigned to:** [Abhay Gupta]
   - **Tasks:**
     - Set up the backend using Node.js and Express.
     - Implement API endpoints for CRUD operations (Create, Read, Update, Delete).
     - Connect to MongoDB for storing user and expense data.
     - Implement JWT-based user authentication and authorization.

### 2. **Frontend Development** (User Interface)
   - **Assigned to:** [Hritik Yadav, Omisha Singh]
   - **Tasks:**
     - Build the user interface using React.js.
     - Create reusable components for input forms, expense lists, and dashboard views.
     - Implement form validation and error handling.
     - Integrate with backend API for data fetching and submission.

### 3. **Expense Summary Dashboard** (Data Visualization)
   - **Assigned to:** [Hritik Yadav]
   - **Tasks:**
     - Develop charts and graphs using Chart.js or D3.js to display expense summaries.
     - Create a dynamic dashboard that updates based on user input and filters.
     - Ensure accessibility and responsiveness for different screen sizes.

### 4. **Database and Deployment**
   - **Assigned to:** [Ayush Gupta]
   - **Tasks:**
     - Set up MongoDB database and create necessary collections (users, expenses, etc.).
     - Implement efficient database queries for user-specific expense retrieval.
     - Set up deployment on AWS (EC2/S3) or another cloud platform.
     - Monitor and maintain the server and database for uptime.

### 5. **Testing and Documentation**
   - **Assigned to:** [None]
   - **Tasks:**
     - Write unit and integration tests for backend and frontend components.
     - Ensure overall code quality by setting up automated testing (using Jest, Mocha, etc.).
     - Write project documentation, including setup guides and API documentation.
     - Assist with bug tracking and troubleshooting during the development process.




## Frontend Setup Instructions

The frontend part of the Expense Tracker project will be built using **React.js**. Follow the steps below to set up the frontend development environment.

### Steps to Set Up Frontend:

1. **Navigate to the frontend directory**:

   Open your terminal and run the following command to move into the frontend folder inside the repository:

   ```bash
   cd frontend
2.  **Install the dependencies**:

    ```bash
    npm i





## 📁 Project Folder Structure

The following is the folder structure for the **Expense Tracker** project. It is divided into logical sections for frontend, backend, and other important configurations.

```bash
Expense-Tracker/
├── frontend/              # Contains the React frontend
│   ├── public/            # Public files such as index.html and static assets
│   ├── src/
│   │   ├── assets/    # Reusable React components like ExpenseForm, ExpenseList
│   │   ├── components/    # Reusable React components like ExpenseForm, ExpenseList
│   │   │   ├── Header
│   │   │   ├── Footer
│   │   │   ├── Main       # Contains main page Elements
│   │   │   ├── Dashboard 
│   │   │   ├── Login.jsx
│   │   │   ├── Logo.jsx
│   │   │   └── Signup.jsx
│   │   ├── utils/         # Utility functions (API calls, helper functions, etc.)
│   │   ├── pages/         # Utility functions (API calls, helper functions, etc.)
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Home.jsx
│   │   │   └── LoginSignup.jsx
│   │   ├── store/         # Utility functions (API calls, helper functions, etc.)
│   │   │   ├── features
│   │   │   │   ├── auth/authSlice
│   │   │   │   └── expenses/expenseSlice
│   │   │   └── Store.js
│   │   ├── App.js         # Main app component
│   │   ├── main.js       # Main entry point for React
│   └── package.json       # Frontend dependencies and scripts
│
├── backend/               # Contains the backend API
│   ├── config/            # Configuration files (DB connection, etc.)
│   ├── controllers/       # Express controllers for handling requests
│   ├── models/            # Mongoose models for MongoDB
│   ├── routes/            # API routes
│   ├── server.js          # Main backend server file
│   └── package.json       # Backend dependencies and scripts
│
├── .gitignore             # Specifies files to ignore in version control
├── README.md              # Project documentation (this file)
├── LICENSE                # Project license information
└── .env                   # Environment variables (for sensitive information like DB connection)
```
#
1. **Current Task**:
    - Creating Login/ SignUp Backend Functionalities
    - Creating Dashboard
    - Creating Expense APIs

##
**API Routes**
- **Login  Route** : /api/auth/login
   - Method: POST
   - Body: { email, password }
   - Response: { token, user }
- **Signup Route**: /api/auth/signup
   - Method: POST
   - Body: { firstName, lastName, email, password }
   - Response: { token, user }
