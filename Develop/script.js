// Arrays of Character Choices
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var special = ['@', '%', '+', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  console.log("this button works!");

}

var generatePassword = function() {

  var passLengthPrompt = window.prompt("How many characters?");
  var passLowerCaseConfirm = window.confirm("would you like your password to have lower case?");
  var passUpperCaseConfirm = window.confirm("Would you like your password to have upper case?");
  var passSpCharacterConfirm = window.confirm("Would you like your password to have special characters?");


  if (passLengthPrompt >= 8 && passLengthPrompt <= 128) {

    console.log("yahello");

    } else {

    window.alert("Your password must be between 8 and 126 characters long.")
    return generatePassword();

  }

  if (passSpCharacterConfirm) {

    passSpCharacterConfirm = true;

    console.log("hello?");

    } else {

    console.log("goodbye");

    }

  if (passUpperCaseConfirm) {

    passUpperCaseConfirm = true;

    console.log("upper case worked");

    } else {

    console.log("upper case did not work")

    }

  if (passLowerCaseConfirm) {

    passLowerCaseConfirm = true;

    console.log("lower case worked");

    } else {

    console.log("lower case did not work")

    }

  if (passSpCharacterConfirm === false && passUpperCaseConfirm === false && passLowerCaseConfirm === false) {
    window.alert("A strong password needs at least one character type! Please select one.");
    return generatePassword();
  }

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


