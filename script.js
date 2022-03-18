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
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// };

// Added an event of listener to generate button
// generateBtn.addEventListener("click", writePassword);

// function generatePassword() {
//   var tempPassword = [];

//   //to get random 





//   // Math.random() * userPass.length


  



//   return finalPassword;
// }


// var specialCharChoice = window.confirm(
//   "Do you want special characters in your password"
// )






function generatePassword() {
  var userPassword = Math.ceil(
    prompt("Choose a password length between 8 and 128 characters."))
  // console.log(userPassword);


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

  var finalPassword = "";

  var passUpper = confirm("Press OK if you want to include capital letters.")
  console.log(passUpper);
  
  if (passUpper === true) {
    var upperRandom = Math.floor(Math.random() * lettersUpper.length);
    var letterUpper = lettersUpper[upperRandom];
    finalPassword += letterUpper;
    passCharArr = passCharArr.concat(lettersUpper)
    console.log(finalPassword);
  }


  var passLower = confirm("Press OK if you want to include lower case letters.");
  console.log(passLower);

  if (passLower === true) {
    var lowerRandom = Math.floor(Math.random() * lettersLower.length);
    var letterLower = lettersLower[lowerRandom];
    finalPassword += letterLower;
    passCharArr = passCharArr.concat(lettersLower);
    console.log(finalPassword);
  }


  var passNumber = confirm("Press OK if you want to include numbers.");
  console.log(passNumber);

  if (passNumber === true) {
    var numRandom = Math.floor(Math.random() * numbers.length);
    var letterNumber = numbers[numRandom];
    finalPassword += letterNumber;
    passCharArr = passCharArr.concat(numbers);
    console.log(finalPassword);
  }


  var passCharacter = confirm("Press OK if you want to include special characters.");
  console.log(passCharacter);

  if (passNumber === true) {
    var charRandom = Math.floor(Math.random() * character.length);
    var letterCharacter = character[charRandom];
    finalPassword += letterCharacter;
    passCharArr = passCharArr.concat(character);
      console.log(finalPassword);
  }
  


  if (passUpper === false && passLower === false && passNumber === false && passCharacter === false) {
    alert("You must select yes to at least one of the conditions")
    generatePassword()
  }

  // return userPassword;

    for (let i = finalPassword.length; i < userPassword.length; i++) {
      var finalRandom = Math.floor(Math.random() * passCharArr.length);
      var imDone = passCharArr[finalRandom];

      
    }
     finalPassword += imDone;
   

      return imDone; 
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

generateBtn.addEventListener("click", writePassword);


