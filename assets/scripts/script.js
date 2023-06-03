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
  const pwdOptions = {
    options: { passwordLength: 8, useLowerCase: false, useUpperCase: false, useNumeric: false, useSpecial: false }
  }

  // Get password length
  // Check for cancel - null
  // Check for numeric
  // Check if >=8 and <=128

  window.alert(pwdCharacterSets["lowerCase"][1]);
  //loop until user enters a number >=8 and <=128 or cancels 
  do {
    pwdOptions.passwordLength = window.prompt(
      "Enter Password Length.\nPasswords must have at least 8 characters and no more than 128 characters"
    );

    // if user clicks on Cancel or Clicks OK without entering the number of character
    // end processing and display message 
    if (!pwdOptions.passwordLength || pwdOptions.passwordLength === undefined) {
      return "User Cancelled Process";
    }

    // Loop until user enters a number >= 8 and <= 128
  } while (
    Number(pwdOptions.passwordLength) < 8 ||       // test for number NOT >= 8
    Number(pwdOptions.passwordLength) > 128 ||     // test for number NOT <= 128
    isNaN(pwdOptions.passwordLength)               // test for entry that is NOT a number
  );

  pwdOptions.useLowerCase = window.prompt(
    "Include lowercase Characters in your password? Choose Y or N"
  );
  pwdOptions.useUpperCase = window.prompt(
    "Include lowercase Characters in your password? Choose Y or N"
  );
  pwdOptions.useNumeric = window.prompt(
    "Include lowercase Characters in your password? Choose Y or N"
  );
  pwdOptions.useSpecial = window.prompt(
    "Include lowercase Characters in your password? Choose Y or N"
  );

  // return the result to writePassword()
  return pwdOptions.passwordLength + "|" + pwdOptions.useLowerCase + "|" + pwdOptions.useUpperCase + "|" + pwdOptions.useNumeric + "|" + pwdOptions.useSpecial;
}
