// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {

  //Define Object to hold possible character sets
  const pwdCharacterSets = {
    lowerCase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",],
    upperCase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",],
    numeric: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    special: ["@", "%", "+", "\\", "/", "'", "!", "#", "$", "^", "?", ":", ",", ")", "(", "}", "{", "]", "[", "~", "-", "_", ".",]
  }

  // Get password length
  // Check for cancel - null
  // Check for numeric
  // Check if >=8 and <=128

  //loop until user enters a number >=8 and <=128 or cancels 
  do {
    passwordLength = window.prompt(
      "Enter Password Length.\nPasswords must have at least 8 characters and no more than 128 characters"
    );

    // if user clicks on Cancel or Clicks OK without entering the number of character
    // end processing and display message 
    if (!passwordLength || passwordLength === undefined) {
      return "User Cancelled Process";
    }

    // Loop until user enters a number >= 8 and <= 128
  } while (
    Number(passwordLength) < 8 ||       // test for number NOT >= 8
    Number(passwordLength) > 128 ||     // test for number NOT <= 128
    isNaN(passwordLength)               // test for entry that is NOT a number
  );

  //Get the User's password options
  // The selected character sets will be stored in an array
  // The character set names in the array will be used to reference the character set object using bracket notation
  // Only the selected character sets will be processed
  var passwordOptions = [];

  // Will Lower Case characters be included?
  userChoice = window.prompt(
    "Use Lower Case Characters?\nEnter Y to use Lower Case characters"
  );
  if (checkValidOption(userChoice)) {
    passwordOptions.push("lowerCase")
  };

  // Will Upper Case characters be included?
  userChoice = window.prompt(
    "Use Upper Case Characters?\nEnter Y to use Upper Case characters");
  if (checkValidOption(userChoice)) {
    passwordOptions.push("upperCase")
  };

  // Will Numbers be included?
  userChoice = window.prompt(
    "Use Numbers?\nEnter Y to use Numbers"
  );
  if (checkValidOption(userChoice)) {
    passwordOptions.push("numeric")
  };

  // Will Special characters be included?
  userChoice = window.prompt(
    "Use Special Characters?\nEnter Y to use Special Characters");
  if (checkValidOption(userChoice)) {
    passwordOptions.push("special")
  };

  var characterSet = "";
  var newPassword = "";

  // Build the password using a For Loop
  for (let i = 0; i < Number(passwordLength); i++) {
    // Use a Random Number to select the Character Set to be used for this password character
    // The name of the character is stored in a string that will be used to specifiy which character set in the object will be used
    // Bracket notation allows the correct proprty of the object to be chosen 
    characterSet = passwordOptions[Math.floor(Math.random() * passwordOptions.length)];

    // Use a Random Number to select the Character from the chosen character set to be used for this password character
    // Use concatenation to append the new password character to the password
    newPassword = newPassword + pwdCharacterSets[characterSet][Math.floor(Math.random() * pwdCharacterSets[characterSet].length)]
  }

  // return the result to writePassword()
  return newPassword;
}

// check for valid password option
// Return true if password option is !null, !undefined and is Y or y
// This avoids the error on the toUpperCase when user clicks cancel at the prompt
// A function is used because this code is run 4 times (once for each possble option)
function checkValidOption(passwordOption) {
  return (passwordOption != null && passwordOption != undefined && passwordOption.toUpperCase() === "Y");
}
