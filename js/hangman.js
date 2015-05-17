var hangmanWords = [
  "the","of","and","a","to","in","is","you","that","it","he",
  "was","for","on","are","as","with","his","they","I","at","be",
  "this","have","from","or","one","had","by","word","but","not",
  "what","all","were","we","when","your","can","said","there",
  "use","an","each","which","she","do","how","their","if","will",
  "up","other","about","out","many","then","them","these","so",
  "some","her","would","make","like","him","into","time","has",
  "look","two","more","write","go","see","number","no","way",
  "could","people","my","than","first","water","been","call",
  "who","oil","its","now","find","long","down","day","did","get",
  "come","made","may","part"
];
var frm = document.querySelector('.guess-form');
var letter = document.querySelector('.guess-entry');
var guessed = document.querySelector('.guess-group');
var display = document.querySelector(".word")
var lives = document.querySelector(".lives")
var dashedWord = [];
var guessedList = [];
var counter = 0;



function sanitize (arr) {
  slimarr = [];
  for (var i = 0; i < arr.length - 1; ++i) {
    var w = arr[i];
    if (w.length >= 3) {
     slimarr.push(w);
   }
  }
  console.log(slimarr);
}

sanitize(hangmanWords);


function getrandomWord (arr, min) {
  randomWord = "";
  var i = Math.floor(Math.random() * ((arr.length - 1) - min + 1)) + min;
  randomWord = arr[i];
  console.log(randomWord);
}

getrandomWord(slimarr, 0);


function displayDash () {
  for (var i = 0; i < randomWord.length; ++i){
    dashedWord[i]= "_ ";
  }
  display.textContent = dashedWord.join(" ");
}

displayDash ();

function splitRandom () {
  checkArr = randomWord.split("");
  console.log(checkArr);
}

splitRandom ();

function checkAnswer () {
frm.addEventListener('submit', function (e) {
var guessesLeft = (8-counter);
e.preventDefault();
compareLettters();
guessedLetters ();
letter.value = '';
console.log(dashedWord);
display.textContent = dashedWord.join(" ");
guessed.textContent = guessedList.join(", ");
lives.textContent =  "Guesses left: " + guessesLeft;
if (guessesLeft == 0){
  alert ("The World Dies");
}
});
}

checkAnswer();

function compareLettters () {
  for (var i = 0; i < checkArr.length; ++i){
    var w = checkArr[i];
    if (letter.value == w) {
    dashedWord[i] = w;
    return true;
    }
  }
}

function guessedLetters () {
  if (compareLettters() == true){
  }
  else {
    guessedList.push(letter.value);
    counter++;
  }
}



//function guessedLetters () {
 //for (var i  = 1; i < guessedList.length; ++i){
   //var x = guessedList[i];
   //if (letter.value !== x) {
   //}
   //guessedList.push(letter.value);
 //}
//}
