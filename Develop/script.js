// Arrays of Character Choices
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var upperCaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var spCharacters = ['@', '%', '+', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
var specifiedLength = '';


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

  // variables used to accept user input and hold boolean values

  var passLengthPrompt = window.prompt("How long would you like your password to be? It must be between 8 and 126 characters long.");
  var passLowerCaseConfirm = window.confirm("would you like your password to have lower case?");
  var passUpperCaseConfirm = window.confirm("Would you like your password to have upper case?");
  var passSpCharacterConfirm = window.confirm("Would you like your password to have special characters?");
  var passNumericConfirm = window.confirm("Would you like your password to have numbers?");

// window.prompt() that checks if the given number is >=8 && <= 128
// -- If there is no error, it resolves. If there is an error, it displays the error message then loops back to the entry field.

  if (passLengthPrompt >= 8 && passLengthPrompt <= 128) {

    specifiedLength = passLengthPrompt;
    console.log(specifiedLength);

    } else {

    window.alert("Your password must be between 8 and 126 characters long.")
    return generatePassword();

  }

// window.confirm() that sets passSpCharacterConfirm to TRUE if the user hits OK
// Sets passSpCharacterConfirm to FALSE if user hits CANCEL.

  if (passSpCharacterConfirm) {

    passSpCharacterConfirm = true;

    console.log("hello?");

    } else {

    console.log("goodbye");

    }

// window.confirm() that sets passNumericConfirm to TRUE if the user hits OK
// Sets passNumericConfirm to FALSE if user hits CANCEL.

  if (passNumericConfirm) {

    passNumericConfirm = true;
    console.log("yo?");

  } else {

    console.log("sadge");

  }

// window.confirm() that sets passUpperCaseConfirm to TRUE if the user hits OK
// Sets passUpperCaseConfirm to FALSE if user hits CANCEL.

  if (passUpperCaseConfirm) {

    passUpperCaseConfirm = true;

    console.log("upper case worked");

    } else {

    console.log("upper case did not work")

    }

// window.confirm() that sets passLowerCaseConfirm to TRUE if the user hits OK
// Sets passLowerCaseConfirm to FALSE if user hits CANCEL.

  if (passLowerCaseConfirm) {

    passLowerCaseConfirm = true;

    console.log("lower case worked");

    } else {

    console.log("lower case did not work")

    }

// Error Handling: Checks to see if the user chose any specifications.
// -- If not, it informs the user that they must select "at least" one, then returns them to the start of the prompts.

  if (passSpCharacterConfirm === false && passUpperCaseConfirm === false && passLowerCaseConfirm === false && passNumericConfirm === false) {
    window.alert("A strong password needs at least one character type! Please select at least one.");
    return generatePassword();
  }

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


