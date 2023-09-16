const mongoose = require('mongoose');

/**
 * Book Schema contains 5 variables
 * user, title, link, bookId, rating 
 * (rating is not required, this value can be added in later)
 */
const bookSchema = mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User'},
    title:{type: String, required: true},
    link: {type: String, required: true},
    bookId: {type: String, required: true},
    rating: {type: Number},
}, {
    timestamps: true,
});

const Book = mongoose.model('Book', bookSchema);
module.exports = Book;