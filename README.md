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
#### localhost:5000/home/users/
<p align='center'>
  <img src='readMe_files/book_user_register.PNG' width='830'>
  <img src='readMe_files/home_user_register_results.PNG' width='830'>
</p>

### User Log-in [POST]
#### localhost:5000/home/users/login
<p align='center'>
  <img src='readMe_files/home_user_login.PNG' width='830'>
  <img src='readMe_files/home_user_login_results.PNG' width='830'>
</p>

### User Profile [GET]
#### localhost:5000/home/users/me
<p align='center'>
  <img src='readMe_files/home_user_me.PNG' width='830'>
  <img src='readMe_files/home_user_me_results.PNG' width='830'>
</p>

## Books Routes
- Generate New Book
- Get all books in Database
- Save book to database
- Update book in database
- Delete book in database

### Generate New Book [GET]
#### localhost:5000/home/books/newBook
<p align='center'>
  <img src='readMe_files/home_books_newBook_noauth.PNG' width='830'>
  <img src='readMe_files/home_books_newBook_noauth_results.PNG' width='830'>
</p>

### Get All Books [GET]
#### localhost:5000/home/books/
<p align='center'>
  <img src='readMe_files/home_books_all.PNG' width='830'>
  <img src='readMe_files/home_books_all_results.PNG' width='830'>
  <img src='readMe_files/home_books_all_full.PNG' width='830'>
</p>

### Save Book [POST]
#### localhost:5000/home/books/:id
<p align='center'>
  <img src='readMe_files/home_books_save.PNG' width='830'>
  <img src='readMe_files/home_books_save_results.PNG' width='830'>
</p>

### Update Book [PUT]
#### localhost:5000/home/books/:id
<p align='center'>
  <img src='readMe_files/home_books_update.PNG' width='830'>
  <img src='readMe_files/home_books_update_results.PNG' width='830'>
</p>

### Delete Book [DELETE]
#### localhost:5000/home/books/:id
<p align='center'>
  <img src='readMe_files/home_books_delete.PNG' width='830'>
  <img src='readMe_files/home_books_delete_results.PNG' width='830'>
  <img src='readMe_files/books_after_delete.PNG' width='830'>
</p>


## Built Using
- JavaScript
- NodeJS
- ExpressJS
- MongoDB
- VSCode
- book-api (personally created using the OpenLibrary API)

