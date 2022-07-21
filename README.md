# User Management System

<img src="https://i.ibb.co/NnNQYTd/Screenshot-1.png" />

### Demo
Backend is deployed on heroku and frontend on netlify. It is deployed on free tier, so it may be a bit slow.

https://master--classy-crumble-9c22d3.netlify.app/


### Project Description

User Management System is a full MERN stack web application. The main goal is to display the list of all users from the database. It allows us to filter and order users, add new users, and edit and delete existing ones. We can filter users by using the form on the User List page and we can order users (descending or ascending) by clicking on the arrows by the field names in the head of the table. Every user must have: first name, last name, username, email, status and password. Password field is hashed and salted before storing in the database and I have decided not to display it on the UI, but it can be easily changed. Users may have permissions and we can assign or remove them from each user. A permission consists of code and description fields.

Status: Online, Away or Offline

Permissions are hard-coded in database:

- Code: 1 - Description: Read
- Code: 2 - Description: Write
- Code: 3 - Description: Update
- Code: 4 - Description: Delete

### Project Features

- List all users from the database
- Filter users by any of its attributes - filter must be exaxt match
- Order users (descending or ascending) by any of its attributes
- Result is paginated (10 users per page)
- User's CRUD functionality
- Add or remove permissions for the selected user
- Pagination

### Built With

#### Backend:

- Node.js
- Express
- MongoDB
- Mongoose
- Yup
- Winston

#### Frontend:

- ReactJS
- React-Router-Dom
- React-Query
- Axios
- Formik
- Yup
- Zustand
- Styled-Components

### To get a local copy up and running follow these simple steps:

1. Clone the repo `https://github.com/Adelam5/user-management-system.git`
2. Install NPM packages `npm install` for backend (from server folder) and frontend (from client folder)
3. Rename .env.exemple to .env (in server folder). I have left my database URL for testing purpose.
4. Start server `npm start` (from server folder), start client `npm start` (from client folder)
5. Open `http://localhost:3000` to view application in the browser.

### Backend API Postman documentation with examples: 
https://documenter.getpostman.com/view/21593150/UzR1K32Z
