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
var display = document.querySelector(".word");
var lives = document.querySelector(".lives");
var color = document.querySelector("img");
var losingword = document.querySelector("thewordwas");
var dashedWord = [];
var guessedList = [];
var counter = 0;
color.style.backgroundColor = "#0A00F6";



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
lives.textContent =  "Lives left: " + guessesLeft;
color.style.backgroundColor = "red";

if (guessesLeft == 8){
  color.style.backgroundColor = "#0A00F6";
}
if (guessesLeft == 7){
  color.style.backgroundColor = "#2900D6";
}
if (guessesLeft == 6){
  color.style.backgroundColor = "#4E00AF";
}
if (guessesLeft == 5){
  color.style.backgroundColor = "#61019F";
}
if (guessesLeft == 4){
  color.style.backgroundColor = "#81027C";
}
if (guessesLeft == 3){
  color.style.backgroundColor = "#A80158";
}
if (guessesLeft == 2){
  color.style.backgroundColor = "#CE0132";
}
if (guessesLeft == 1){
  color.style.backgroundColor = "#F70008";
}

if (guessesLeft == 0 && dashedWord.join("") !== randomWord){
  window.location="losingpage.html";

}
if (dashedWord.join("") == randomWord) {
  window.location="winningpage.html";
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
