// Assignment code here


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

  passLength();
  passSpCharacter();
  passUpperCase();
  passLowerCase();

};


// BELOW ARE ALL PROMPT FUNCTIONS REFERRED TO IN generatePassword

// PASSWORD LENGTH 

var passLength = function() {

var passLengthPrompt = window.prompt("How many characters?");

    if (passLengthPrompt >= 8 && passLengthPrompt <= 128) {

      console.log("Damn, this works?");
    
    } else {
    
    passLengthPrompt = window.alert("Your password must contain 8 or more and no less than 128 characters.");
    return passLength();
      
    }

  };

// SPECIAL CHARACTERS

var passSpCharacter = function() {

  passSpCharacterConfirm = window.confirm("Would you like your password to have special characters?");

  if (passSpCharacterConfirm) {

    console.log("hello?");

  } else {

    console.log("goodbye");

  }

};

// UPPER CASE

var passUpperCase = function() {

  var passUpperCaseConfirm = window.confirm("Would you like your password to have upper case?");

  if (passUpperCaseConfirm) {

    console.log("upper case worked");

  } else {

    console.log("upper case did not work")
    
  }
}

// LOWER CASE

var passLowerCase = function() {

  var passLowerCaseConfirm = window.confirm("would you like your password to have lower case?");

  if (passLowerCaseConfirm) {

    console.log("lower case worked");

  } else {

    console.log("lower case did not work")

  }
}

//END OF PROMPT FUNCTIONS

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


