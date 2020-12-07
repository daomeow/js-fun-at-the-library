//--------------------------------------------
// Definition of 'createLibrary' function
//--------------------------------------------

function createLibrary(libraryName) {
  return {
      name: libraryName,
      shelves: {
        fantasy:[],
        fiction:[],
        nonFiction:[],
      },
  }
};

var denverLibrary = createLibrary("Denver Public Library");

var goldenLibrary = createLibrary("Golden Public Library");

var denverLibrary = createLibrary("Denver Public Library");

console.log(denverLibrary)
//--------------------------------------------
// Definition of 'addBook' function
//--------------------------------------------

function addBook(shelfObj, book) {
  shelfObj.shelves[book.genre].push(book)
};

var denverLibrary = createLibrary("Denver Public Library");
var dracula = {
  title: "Dracula",
  mainCharacter: { name: "Count Dracula", age: undefined, pronouns: "he/him" },
  pageCount: 418,
  genre: "fantasy"
}

addBook(denverLibrary, dracula);

var denverLibrary = createLibrary("Denver Public Library");
var dracula = {
  title: "Dracula",
  mainCharacter: { name: "Count Draula", age: undefined, pronouns: "he/him" },
  pageCount: 418,
  genre: "fantasy"
}
var paleBlueDot = {
  title: "The Pale Blue Dot",
  mainCharacter: undefined,
  pageCount: 187,
  genre: 'nonFiction'
}

addBook(denverLibrary, dracula);
addBook(denverLibrary, paleBlueDot);


//--------------------------------------------
// Definition of 'checkoutBook' function
//--------------------------------------------
//remove from object
// result return as a string

function checkoutBook(shelfObj, myTitle, myGenre) {
  shelfObj.shelves[myGenre].splice(shelfObj.shelves[myGenre])
}

var dracula = {
  title: "Dracula",
  mainCharacter: { name: "Count Dracula", age: undefined, pronouns: "he/him" },
  pageCount: 418,
  genre: "fantasy"
}
var bornACrime = {
  title: "Born a Crime",
  mainCharacter: { name: "Trevor Noah", age: 36, pronouns: "he/him" },
  pageCount: 304,
  genre: "nonFiction"
}
var prideAndPrejudice = {
  title: "Pride and Prejudice",
  mainCharacter: { name: "Eliabeth Bennet", age: 20, pronouns: "she/her" },
  pageCount: 432,
  genre: "fiction"
}
var denverLibrary = createLibrary("Denver Public Library");

addBook(denverLibrary, dracula);
addBook(denverLibrary, bornACrime);
addBook(denverLibrary, prideAndPrejudice);

var result = checkoutBook(denverLibrary, "Pride and Prejudice", "fiction");


module.exports = {
  createLibrary,
  addBook,
  //checkoutBook
};
