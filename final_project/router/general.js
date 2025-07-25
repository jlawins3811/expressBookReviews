const express = require('express');
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();
const axios = require('axios');
let books = {
    "1": { "title": "Fairy tales", "author": "Author A", "isbn": "123", "reviews": {} },
    "2": { "title": "Another Book", "author": "Author B", "isbn": "456", "reviews": {} }
    // ... other books
  };
public_users.post("/register", (req,res) => {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});

// Get the book list available in the shop
public_users.get('/',function (req, res) {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});

// Get book details based on ISBN
public_users.get('/isbn/:isbn',function (req, res) {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
 });
  
// Get book details based on author
public_users.get('/author/:author',function (req, res) {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});

// Get all books based on title

// Task 13: Get book details based on Title using Promise or async-await
public_users.get('/title/:title', function (req, res) {
  const title = req.params.title.toLowerCase();

  // Find books that match the title (case-insensitive)
  const matchedBooks = Object.values(books).filter(book => book.title.toLowerCase() === title);

  if (matchedBooks.length > 0) {
    return res.json(matchedBooks);
  } else {
    return res.status(404).json({ message: "Book not found with the given title" });
  }
});

//  Get book review
public_users.get('/review/:isbn',function (req, res) {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});

module.exports.general = public_users;