//--------------------------------------------
// Definition of 'createTitle' function
//--------------------------------------------

function shelfBook(book,array) {
  if (array.length < 3) {
    array.unshift(book);
  }
}


var hyperion = {
  title: "Hyperion",
  mainCharacter: { name: "The Shrike", age: null, pronouns: "they" },
  pageCount: 482,
  genre: "sciFi"
};
var dune = {
  title: "Dune",
  mainCharacter: { name: "Paul", age: 15, pronouns: "he/him" },
  pageCount: 421,
  genre: "sciFi"
};
var endersGame = {
  title: "Ender's Game",
  mainCharacter: { name: "Andrew 'Ender' Wiggin", age: 10, pronouns: "he/him" },
  pageCount: 324,
  genre: "sciFi"
};
var caseysBook = {
  title: "The Robot Kitty",
  mainCharacter: { name: "Coda", age: 15, pronouns: "he/him" },
  pageCount: 201,
  genre: "sciFi"
};

var sciFiShelf = [hyperion, dune];

shelfBook(endersGame, sciFiShelf);

shelfBook(caseysBook, sciFiShelf);

//--------------------------------------------
// Definition of 'unshelfBook' function
//--------------------------------------------

function unshelfBook(book, array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i].title === book) {
      array.splice(i, 1)
    }
  }
}

var hyperion = {
  title: "Hyperion",
  mainCharacter: { name: "The Shrike", age: null, pronouns: "they" },
  pageCount: 482,
  genre: "sciFi"
};
var dune = {
  title: "Dune",
  mainCharacter: { name: "Paul", age: 15, pronouns: "he/him" },
  pageCount: 421,
  genre: "sciFi"
};
var endersGame = {
  title: "Ender's Game",
  mainCharacter: { name: "Andrew 'Ender' Wiggin", age: 10, pronouns: "he/him" },
  pageCount: 324,
  genre: "sciFi"
};

var sciFiShelf = [hyperion, dune, endersGame];

unshelfBook("Dune", sciFiShelf);

//--------------------------------------------
// Definition of 'listTitles' function
//--------------------------------------------

function listTitles(myBook) {
  var stringTitle = ""

  for (var i = 0; i < myBook.length; i++) {
    if (i < myBook.length -1) {
      stringTitle += (myBook[i].title + ", ")
    } else {
      stringTitle += (myBook[i].title)
    }
  }
  return stringTitle
}

var hyperion = {
  title: "Hyperion",
  mainCharacter: { name: "The Shrike", age: null, pronouns: "they" },
  pageCount: 482,
  genre: "sciFi"
};
var dune = {
  title: "Dune",
  mainCharacter: { name: "Paul", age: 15, pronouns: "he/him" },
  pageCount: 421,
  genre: "sciFi"
};
var endersGame = {
  title: "Ender's Game",
  mainCharacter: { name: "Andrew 'Ender' Wiggin", age: 10, pronouns: "he/him" },
  pageCount: 324,
  genre: "sciFi"
};
var fantasyShelf = [hyperion, dune, endersGame];

var titles = listTitles(fantasyShelf);

//--------------------------------------------
// Definition of 'searchShelf' function
//--------------------------------------------

function searchShelf(array, bookTitle) {
  var defaultBoo = true

  for (var i = 0; i < array.length; i++) {
    if (array[i].title === bookTitle) {
      defaultBoo = true
    } else {
      defaultBoo = false
    }
  }
  return defaultBoo
}

var hyperion = {
  title: "Hyperion",
  mainCharacter: { name: "The Shrike", age: null, pronouns: "they" },
  pageCount: 482,
  genre: "sciFi"
};
var dune = {
  title: "Dune",
  mainCharacter: { name: "Paul", age: 15, pronouns: "he/him" },
  pageCount: 421,
  genre: "sciFi"
};
var sciFiShelf = [dune, hyperion];

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
