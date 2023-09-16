const router = require('express').Router();
// all routes go through the BookController
const {getBooks, updateBook, saveBook, deleteBook, newBook} = require('../controllers/bookController');
const { protect } = require('../middleware/authMiddleware');

// books routes
router.get('/newBook', newBook);
router.get('/', protect, getBooks);
router.post('/:id', protect, saveBook);
router.put('/:id', protect, updateBook);
router.delete('/:id', protect, deleteBook);

module.exports = router;