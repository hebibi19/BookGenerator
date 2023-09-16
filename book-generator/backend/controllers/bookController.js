const bookAPI = require('book-api');
const Book = require('../models/bookModel');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');

/**
 * @description Generate new Book
 * @route GET /newBook
 * @access Private
 */
const newBook = asyncHandler (async (req, res) => {
    
        const book = await bookAPI.pickRandom('fantasy');
        const workId = book.key;
        const splitId = workId.split("/");
        const id = splitId[2];
        res.status(200).json({Title: book.title, Id: id})
});

/**
 * @description Generate new Book
 * @route GET /
 * @access Private
 */
const getBooks = asyncHandler(async (req, res) => {

        const books = await Book.find({user: req.user.id});
        res.status(200).json(books);

});

/**
 * @description Save new Book
 * @route POST /newBook
 * @access Private
 */
const saveBook = asyncHandler(async (req, res) => {

        const {params, query} = req;
        const {id} = params;
        const base = 'https://openlibrary.org';


        const onlineBook = await bookAPI.findBook(id);
        const book = await Book.create({title: onlineBook.title, link: `${base}/works/${id}`, bookId: id, user: req.user.id});
        res.status(200).json(book);

});

/**
 * @description Update Books
 * @route PUT /newBook.:id
 * @access Private
 */
const updateBook = asyncHandler(async (req, res) => {

        const book = await Book.findById(req.params.id);


        const user = await User.findById(req.user.id);
        if (!user) {
                res.status(401);
                throw new Error('User not found.');
        }
        // make sure the logged in user matches the book user
        if (book.user.toString() != user.id) {
                res.status(401);
                throw new Error('user not authorized');
        }

        if (!book){
            throw new Error('Book not found');
        }

        const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {new: true});
        
        res.status(200).json(updatedBook);

});

/**
 * @description Delete Book
 * @route DELETE /newBook/:id
 * @access Private
 */
const deleteBook = asyncHandler(async (req, res) => {

        const deleteBook = await Book.findById(req.params.id);
        if (!deleteBook) {
            res.status(400);
            throw new Error('Book not found');
        }

        const user = await User.findById(req.user.id);
        if (!user) {
                res.status(401);
                throw new Error('User not found.');
        }
        // make sure the logged in user matches the book user
        if (deleteBook.user.toString() != user.id) {
                res.status(401);
                throw new Error('user not authorized');
        }

        await deleteBook.deleteOne();
        res.json({id: req.params.id});

});

module.exports = {
    getBooks,
    newBook,
    saveBook,
    updateBook,
    deleteBook,
}