//--------------------------------------------
// Definition of 'createTitle' function
//--------------------------------------------
function createTitle(title) {
  return `The ${title}`;
}

var bookIdea = createTitle("Storm's Awakening");

var sushiTitle = createTitle("Dancing Sushi");
var dragonTitle = createTitle("Dragon in the Summer");
var ghostTitle = createTitle("Teenage Ghoul");

//--------------------------------------------
// Definition of 'buildMainCharacter' function
//--------------------------------------------

function buildMainCharacter (charName,charAge,charPronouns) {
  return {
    name: charName,
    age: charAge,
    pronouns: charPronouns,
  }
}

var ghoulCharacter = buildMainCharacter("Vassya", 16, "she/her");

//--------------------------------------------
// Definition of 'saveReview' function
//--------------------------------------------
function saveReview(review, array) {
  if (array.indexOf(review) === -1) {
      array.push(review);
  }
}

var reviews = [];
saveReview("An astounding success", reviews);

var reviews = ["You won't be able to put it down"];
saveReview("A page turner!", reviews);
saveReview("An instant classic!", reviews);

var reviews = [];
saveReview("I want everyone to read this book!", reviews);
saveReview("I couldn't stop reading!", reviews);
saveReview("I want everyone to read this book!", reviews);

//--------------------------------------------
// Definition of 'calculatePageCount' function
//--------------------------------------------

function calculatePageCount(bookTitle){
  var result = bookTitle.length * 20
  return result
}

var bookTitle = createTitle("Teenage Ghoul");
var bookPageCount = calculatePageCount(bookTitle);

var bookTitle = createTitle("The Dragon in the Summer");
var bookPageCount = calculatePageCount(bookTitle);

//--------------------------------------------
// Definition of 'writeBook' function
//--------------------------------------------

function writeBook(myTitle,myMainChar,myGenre){
  var buildBook = {
    title: myTitle,
    mainCharacter: myMainChar,
    pageCount: calculatePageCount(myTitle),
    genre: myGenre,
  }
  return buildBook
}

var bookTitle = createTitle("Teenage Ghoul");
var bookCharacter = buildMainCharacter("Vassya", 16, "she/her");
var book = writeBook(bookTitle, bookCharacter, "fantasy");

var dragonTitle = createTitle("The Dragon in the Summer");
var dragonCharacter = buildMainCharacter("Dana", 25, "they/them");
var dragonBook = writeBook(dragonTitle, dragonCharacter, "fantasy");

//--------------------------------------------
// Definition of 'editBook' function
//--------------------------------------------

//pull page Count
//math with page count
function editBook(newBook) {
  newBook.pageCount = newBook.pageCount * .75
}

var ghoulTitle = createTitle("Teenage Ghoul");
var ghoulCharacter = buildMainCharacter("Vassya", 16, "she/her");
var ghoulBook = writeBook(ghoulTitle, ghoulCharacter, "mystery");

editBook(ghoulBook);


module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
