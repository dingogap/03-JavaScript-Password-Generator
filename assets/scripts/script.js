// Assignment Code
var generateBtn = document.querySelector("#generate");

// Define Possible Password Characters
var specialCharacters = ["@", "%", "+", "\\", "/", "'", "!", "#", "$", "^", "?", ":", ",", ")", "(", "}", "{", "]", "[", "~", "-", "_", ".",];

var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var lowerCasedCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

var upperCasedCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  // Get password length
  // Check for cancel - null
  // Check for numeric
  // Check if >=8 and <=128

  //loop until user enters a number >=8 and <=128 or cancels 
  do {
    var passwordLength = window.prompt(
      "Enter Password Length. Passwords must have at least 8 characters and no more than 128 characters"
    );

    // if user clicks on Cancel or Clicks OK without entering the number of character
    // end processing and display message 
    if (!passwordLength || passwordLength === undefined) {
      return "User Cancelled Process";
    }

    // Loop until user enters a number >=8 and <= 128
  } while (
    Number(passwordLength) < 8 ||       // test number >=8
    Number(passwordLength) > 128 ||     // test number <= 128
    isNaN(passwordLength)               // test for number
  );

  // return the result to writePassword()
  return passwordLength;
}
