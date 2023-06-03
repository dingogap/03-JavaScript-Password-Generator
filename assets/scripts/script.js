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

// check for valid password option
function checkValidOption(passwordOption) {
return (passwordOption != null && passwordOption != undefined && passwordOption.toUpperCase() === "Y");
}

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
  var passwordOptions = [];

  // Will Lower Case characters be included
  userChoice = window.prompt(
    "Use Lower Case Characters?\nEnter Y to use Lower Case characters"
  );
  if (checkValidOption(userChoice)) {
    passwordOptions.push("lowerCase")
  };

  // Will Upper Case characters be included
  userChoice = window.prompt(
    "Use Upper Case Characters?\nEnter Y to use Upper Case characters");
    if (checkValidOption(userChoice)) {
    passwordOptions.push("upperCase")
  };

  // Will Numbers be included
  userChoice = window.prompt(
    "Use Numbers?\nEnter Y to use Numbers"
  );
  if (checkValidOption(userChoice)) {
    passwordOptions.push("numeric")
  };

  // Will Special characters be included
  userChoice = window.prompt(
    "Use Special Characters?\nEnter Y to use Special Characters");
    if (checkValidOption(userChoice)) {
    passwordOptions.push("special")
  };

  // return the result to writePassword()
  return passwordLength + "|" + passwordOptions
}
