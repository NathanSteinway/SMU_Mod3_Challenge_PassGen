// Arrays of Character Choices
var passLengthPrompt = "0";
var passLowerCaseConfirm = "false";
var passUpperCaseConfirm = "false";
var passSpCharacterConfirm = "false";
var passNumericConfirm = "false";
var newPassword = [];


const allNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const upperCaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const lowerCaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const spCharacters = ['@', '%', '+', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var newPasswordDisplayEl = document.querySelector("#password");

// Write password to the #password input
function writePassword() {

  userInput();
  userChoices();
  generatePassword();

};

var userInput = function() {

  // variables used to accept user input and hold boolean values

  passLengthPrompt = window.prompt("How long would you like your password to be? It must be between 8 and 126 characters long.");

    if (passLengthPrompt < 8 || passLengthPrompt > 126) {

      return userInput();

    }

  passLowerCaseConfirm = window.confirm("would you like your password to have lower case?");
  passUpperCaseConfirm = window.confirm("Would you like your password to have upper case?");
  passSpCharacterConfirm = window.confirm("Would you like your password to have special characters?");
  passNumericConfirm = window.confirm("Would you like your password to have numbers?");

};

// Array to contain boolean values in
var userInputArray = [];

var userChoices = function() {
  // window.prompt() that checks if the given number is >=8 && <= 128
  // -- If there is no error, it resolves. If there is an error, it displays the error message then loops back to the entry field.

    if (passLengthPrompt >= 8 && passLengthPrompt <= 128.0) {

        userInputArray = userInputArray.concat(passLengthPrompt);

    }

  // window.confirm() that sets passSpCharacterConfirm to TRUE if the user hits OK
  // Sets passSpCharacterConfirm to FALSE if user hits CANCEL.

    if (passSpCharacterConfirm == true) {

      userInputArray = userInputArray.concat(spCharacters);

    }

  // window.confirm() that sets passNumericConfirm to TRUE if the user hits OK
  // Sets passNumericConfirm to FALSE if user hits CANCEL.

    if (passNumericConfirm == true) {

      userInputArray = userInputArray.concat(allNumbers);

    }

  // window.confirm() that sets passUpperCaseConfirm to TRUE if the user hits OK
  // Sets passUpperCaseConfirm to FALSE if user hits CANCEL.

    if (passUpperCaseConfirm == true) {

      userInputArray = userInputArray.concat(upperCaseLetters);

      }

  // window.confirm() that sets passLowerCaseConfirm to TRUE if the user hits OK
  // Sets passLowerCaseConfirm to FALSE if user hits CANCEL.

    if (passLowerCaseConfirm == true) {

      userInputArray = userInputArray.concat(lowerCaseLetters);

      }

  // Error Handling: Checks to see if the user chose any specifications.
  // -- If not, it informs the user that they must select "at least" one, then returns them to the start of the prompts.

    if (passSpCharacterConfirm === false && passUpperCaseConfirm === false && passLowerCaseConfirm === false && passNumericConfirm === false) 
      {
        window.alert("A strong password needs at least one character type! Please select at least one.");
        return userInput();
      }
};

var generatePassword = function() {

  for (i = 0; i < passLengthPrompt; i++) {

    newPassword += userInputArray[Math.floor(Math.random() * (userInputArray.length))];

    }
  
    newPasswordDisplayEl.textContent = newPassword;
    newPassword = [];
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);






