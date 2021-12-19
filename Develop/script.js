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
  
  var passLengthPrompt = window.prompt("testing testing is this thing on?")

    if (passLengthPrompt >= 8 && passLengthPrompt <= 128) {

        console.log("Damn, this works?");

    } else {

        passLengthPrompt = window.alert("Invalid");

        console.log("Yikes...");
        return generatePassword();
    }

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
