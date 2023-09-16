# BookGenerator

## About the Project
## Features
Prior to working with the application ensure you have downloaded all files properly:
- Ensure that the .env file is configured properly
- Run 'npm install' on book-api
- Run 'npm install' on book-generator
- Run 'npm run dev' to start the application

## Users Routes
- Register User
- Login User
- User Profile Information

### Register User [POST]
#### http://localhost:5000/home/users/

### User Log-in [POST]
#### http://localhost:5000/home/users/login

### User Profile [GET]
#### http://localhost:5000/home/users/me

## Books Routes
### Generate New Book [GET]
#### http://localhost:5000/home/books/newBook

### Get All Books [GET]
#### http://localhost:5000/home/books/

### Save Book [POST]
#### http://localhost:5000/home/books/:id

### Update Book [PUT]
#### http://localhost:5000/home/books/:id

### Delete Book [DELETE]
#### http://localhost:5000/home/books/:id


## Built Using
- JavaScript
- NodeJS
- ExpressJS
- MongoDB
- VSCode
- book-api (personally created using the OpenLibrary API)

