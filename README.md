# User Management System

### Project Description

User Management System is a full MERN stack web application. The main goal is to display the list of all users from the database. It allows us to filter and order users, add new users, and edit and delete existing ones. We can filter users by using form on the User List page and we can order users (descending or ascending) by clickng on the arrows by the field names in the head of the table. Every user must have: first name, last name, username, email, status and password. Password field is hashed and salted before storing in the database and it is not displayed on UI. Users may have permissions and we can assign or remove them from each user. A permission consists of code and description fields.

Status: Online, Away or Offline

Permissions:

- Code: 1 - Description: Read
- Code: 2 - Description: Write
- Code: 3 - Description: Update
- Code: 4 - Description: Delete

### Project Features

- List, filter and order users
- Result is paginated (10 users per page)
- Create, edit, update or delete user
- Add or remove permissions for the selected user
- Pagination

### Built With

#### Backend:

- Node.js
- Express
- MongoDB
- Mongoose

#### Frontend:

- ReactJS
- React-query
- Axios
- Formik
- Yup
- Zustand
- Styled-components

### To get a local copy up and running follow these simple steps:

1. Clone the repo `https://github.com/Adelam5/user-management-system.git`
2. Install NPM packages `npm install` for backend (from server folder) and frontend (from client folder)
3. Rename .env.exemple to .env (in server folder). I have left my database URL for testing purpose.
4. Start server `npm start` (from server folder), start client `npm start` (from client folder)
5. Open `http://localhost:3000` to view application in the browser.

### Backend API Postman documentation with examples: 
https://documenter.getpostman.com/view/21593150/UzQyqNmn
