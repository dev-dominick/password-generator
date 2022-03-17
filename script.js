// Assignment Code
var generateBtn = document.querySelector("#generate");

// var of Uppercase letters
var lettersUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

// Var of Lowercase letters
var lettersLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Var of Numbers
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Var of Special characters
var character = ["!", '"', "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "`", "{", "|", "}", "~"];


var passCharArr = []


//generatepass gets stored in password 



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Added an event of listener to generate button
generateBtn.addEventListener("click", writePassword);

// function generatePassword() {
//   var tempPassword = [];

//   //to get random 





//   // Math.random() * userPass.length


//   var finalPassword = "";



//   return finalPassword;
// }


// var specialCharChoice = window.confirm(
//   "Do you want special characters in your password"
// )






function generatePassword() {
  var userPassword = Math.ceil(
    prompt("Choose a password length between 8 and 128 characters."))
  console.log(userPassword);


  if (isNaN(userPassword)) {
    prompt("Please input a number between 8 and 128 in this field.")
    generatePassword();

  }

  // if (userPassword >= 8 && userPassword <= 128) {
  //     generatePassword();
  // } 


  // Condition if user inputs password length less than 8 characters.
  if (userPassword < 8 || userPassword > 128) {
    confirm(
      "Password needs to be at least 8 characters and no more than 128."
    );
    return;
  }
  // // Condition if user inputs password length more than 128 characters.
  if (userPassword > 8 || userPassword < 128) {
    console.log(userPassword);
  }

  var passUpper = confirm("Press OK if you want to include capital letters.")
  console.log(passUpper);
  
  if (passUpper) {
    passCharArr.concat(lettersUpper)
  }


  var passLower = confirm("Press OK if you want to include lower case letters.");
  console.log(passLower);

  if (passLower) {
    passCharArr.concat(lettersLower)
  }

  var passNumber = confirm("Press OK if you want to include numbers.");
  console.log(passNumber);

  if (passNumber) {
    passCharArr.concat(numbers)
  }

  var passCharacter = confirm("Press OK if you want to include special characters.");
  console.log(passCharacter);

  if (passCharacter) {
    passCharArr.concat(character)
  }


  if (passUpper === false && passLower === false && passNumber === false && passCharacter === false) {
    alert("You must select yes to at least one of the conditions")
    generatePassword()
  }

  return userPassword;

    for (var i = 0; i < userPass.length; i++) {
    
    userPass.push(passCharArr[Math.floor(Math.random() * passCharArr)])
    
  }

}




