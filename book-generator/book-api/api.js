const superagent = require('superagent');
const base = 'https://openlibrary.org';

/**
 * Method takes in a subject (book genre)
 * 
 * Calculates an offseet number to randomize a page since
 * only a certain amount of results are shown per page
 * 
 * Then returns a list of 200 books and randomly chooses the 
 * information of one of them
 */
const pickRandom = async (subject) => {
    try {
        const offset = Math.floor(Math.random() * 200);
        const bookURL = `${base}/subjects/${subject}.json?limit=200&offset=${offset}`;
        const res = await superagent.get(bookURL); 

        const chosenBook = Math.floor(Math.random() * 200);

        return res.body.works[chosenBook];
    } catch (error){
        console.log(error);
    }
}

/**
 * Method takes in a bookID
 * 
 * Locates the book information from the Online DB
 * returns all book information relating to that bookID
 */
const findBook = async (bookID) => {
    try {
        const bookURL = `${base}/works/${ bookID }.json`;
        const res = await superagent.get(bookURL); 

        return res.body;
    } catch (error){
        console.log(error);
    }
}

module.exports = {
    pickRandom,
    findBook,
}