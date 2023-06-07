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
  //Define Object to hold Password Settings
  // - Character Sets
  // - Character Sets to choose from
  // - Prompts for the Character Set
  // - Character Sets to be used
  // - Minimum & Maximum Password Legnths
  // - Get the next Character to be used randomly from the from the chosen character

  const passwordSettings = {
    lowercase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",],
    uppercase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",],
    numbers: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    special: ["@", "%", "+", "\\", "/", "'", "!", "#", "$", "^", "?", ":", ",", ")", "(", "}", "{", "]", "[", "~", "-", "_", ".",],
    options: ["lowercase", "uppercase", "numbers", "special"],
    prompts: ["Lowercase Characters", "Uppercase Characters", "Numbers", "Special Characters"],
    choices: [],
    minimumLength: 8,
    maximumLength: 128,
    minimumCharacterSets: 1,
    nextPasswordCharacter: function () {
      // Get the next character set to be used from the array of selected character sets
      characterSet = this.choices[Math.floor(Math.random() * this.choices.length)];
      // Get the next Password Character
      return this[characterSet][Math.floor(Math.random() * this[characterSet].length)
      ];
    },
  };

  // Get password length
  // Check for cancel - null
  // Check for numbers
  // Check if >=8 and <=128

  //Loop until user enters a number>= Minimum Password Length and <= Maximum Password Length
  do {
    passwordLength = window.prompt(
      "\nEnter Password Length.\n\nPasswords must have at least 8 characters and no more than 128 characters.\n\nClick Cancel to quit.\n"
    );

    // If user clicks on Cancel or Clicks OK without entering the number of charactersconsole.log
    // end processing
    if (!passwordLength || passwordLength === undefined) {
      return null;
    }

    // Check if user entered a number >= Minimum Password Length and <= Maximum Password Length
  } while (
    Number(passwordLength) < passwordSettings.minimumLength || // test for number NOT >= 8
    Number(passwordLength) > passwordSettings.maximumLength || // test for number NOT <= 128
    isNaN(passwordLength) // test for entry that is NOT a number
  );

  //Get the User's password options
  // The selected character sets will be stored in an array
  // The character set names in the array will be used to reference the character set object using bracket notation
  // Only the selected character sets will be processed
  var newPassword = "";

  // loop until the user has included at least 1 valid character set in the password
  do {
    //Loop until through the array of Character Sets until the user has chosen at least 1 character set to be used
    for (let i = 0; i < passwordSettings.options.length; i++) {

      // Prompt the user to include or reject a character set
      userChoice = window.prompt("\nUse " + passwordSettings.prompts[i] + "?\n\nEnter Y or y to use " + passwordSettings.prompts[i] + ".\n");
      // If the user entered a "Y" or "y" add the character set to the choices property in the passwordSettings object
      if (checkValidOption(userChoice)) {
        passwordSettings.choices.push(passwordSettings.options[i]);
      }
    }
    //Check if user selected the minimum Character Sets - if not generate a warning message
    if (passwordSettings.choices.length < passwordSettings.minimumCharacterSets) {
      window.alert(
        "\nYou did not select a Character Set!\n\nYou have to select at least " + passwordSettings.minimumCharacterSets + " Character Set" + checkForMoreThanOne(passwordSettings.minimumCharacterSets) + " to generate a password\n\nPlease try again!"
      );
    }

    // Check if the User has selected the minimum Character Sets
    // If not - Repeat
  } while (passwordSettings.choices.length < passwordSettings.minimumCharacterSets);

  // Build the password using a For Loop
  for (let i = 0; i < Number(passwordLength); i++) {
    // Append the new password character to the password
    // All the work is done by the passwordSettings object making management easier
    newPassword = newPassword + passwordSettings.nextPasswordCharacter();
  }
  // Return the result to writePassword()
  return newPassword;
}

// Check for valid password option
// Return true if password option is !null, !undefined and is Y or y
// This avoids the error on the toUpperCase when user clicks cancel at the prompt
// A function is used because this code is run 4 times (once for each possble option)
function checkValidOption(passwordOption) {
  return (
    passwordOption != null &&               // Didn't click Cancel
    passwordOption != undefined &&          // Didn't clock OK on empty
    passwordOption.toUpperCase() === "Y"    // Entered Y or y
  );
}

// Check if there are more than 1 item & is so return an s
// This is used to changes a word from singular to plural if applicable
function checkForMoreThanOne(checkValue) {
  if (checkValue > 1) {
    addAnS = "s";
  } else {
    addAnS = "";
  }
  return addAnS;
}
