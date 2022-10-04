const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let passwordElOne = document.querySelector("#password-one");
let passwordElTwo = document.querySelector("#password-two");
let length = document.querySelector("#length");

function generatePassword() {
  passwordOne = [];
  passwordTwo = [];

  for (let i = 0; i < length.value; i++) {
    let randomIndexOne = Math.floor(Math.random() * characters.length);
    passwordOne += characters[randomIndexOne];

    let randomIndexTwo = Math.floor(Math.random() * characters.length);
    passwordTwo += characters[randomIndexTwo];
  }
  passwordElOne.textContent = passwordOne;
  passwordElTwo.textContent = passwordTwo;
}

function copyOne() {
  var range = document.createRange();
  range.selectNode(document.getElementById("password-one"));
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
}

function copyTwo() {
  var range = document.createRange();
  range.selectNode(document.getElementById("password-two"));
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
}
