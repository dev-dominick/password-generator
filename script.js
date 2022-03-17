// Assignment Code
var generateBtn = document.querySelector("#generate");

// var of Uppercase letters
var lettersUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

// Var of Lowercase letters
var lettersLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Var of Numbers
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Var of Special characters
var character = ["!", '"', "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "`", "{", "|", "}", "~" ];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Added an event of listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() { 
  var userPassword = Math.ceil(
    prompt("Choose a password length between 8 and 128 characters.")
  ); 
  console.log(userPassword);

  if (userPassword < 8) {
    prompt("Password needs to be at least 8 characters. Please select a password length between 8 and 128 characters.")
  };
  
  if (userPassword > 128) {
    prompt(
      "Password needs to be less than 128 characters. Please select a password length between 8 and 128 characters."
    );
  }

}

