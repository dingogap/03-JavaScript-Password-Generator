# 03-JavaScript-Password-Generator

## Description
The Password Generator builds complex passwords on demand.

It is a simple process that:
1. gets the number of chacters to be used in the password
2. gets the number of character sets to be used & flags them
3. selects a random character from a character set chosen randomly from the set of flagged character sets
4. appends the character to the end of the password
5. displays the password in the textarea.

#### Passwords Rules:
1. Minimum Length: 8 characters
2. Maximum Length: 128 Characters
3. Passwords can contain:
    * lower case characters
    * upper case charcaters
    * numbers
    * special characters
    * at least 1 character set must be used.

## Data
All data specific to generating the password has been placed in a JavaScript object named **passwordSettings**.

Changes to the password specifications (number of characters or minimum character sets) are made in the object. Generally there would be no need to change the code. 

**passwordSettings** contains the following:

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
 
1. **lowercase, uppercase, numbers and special** are arrays that hold the Character Sets that can be used.
2. **options** holds names of the charcaters sets
3. **prompts** holds message prompts to allow looping
4. **choices** holds the charcater set choices entered at runtime
5. **minimumLength** is the minimum password length
6. **maximumLength** is the maximum password length
7. **minimumCharacterSets** is the minimum number of character sets to be used in the password
8. **nextPasswordCharacter** is a function that will generate the next character using the information stored in the object.



## Password Generator Website Link
Click the link to visit the deployed wbsite: [Password Generator][def1].

## Site Structure

The Password Generator is a landing page tha contains :
1: Header - containing a Heading
2: Main Content Area - containing a Text Area that will display the generated password.
3. A button that initiates the JS code to generate the password.

## Navigation

The Password Generator website looks like this:. 
![Password Generator](assets/websiteImages/passwordGenerator.png)

Clicking the Generate Password Button starts collecting paramters the website needs to generate a password.

##### Prompt 1: Enter Password Length

![Enter password Length](assets/websiteImages/getPasswordLength.png)

If:
&nbsp;&nbsp;&nbsp;&nbsp;1. a valid password length is entered the process will continue.
&nbsp;&nbsp;&nbsp;&nbsp;2. cancel is clicked the proces will stop
&nbsp;&nbsp;&nbsp;&nbsp;3. OK (with an empty inout field) the process will stop
&nbsp;&nbsp;&nbsp;&nbsp;4. any other entry and the prompt will be presented again

#### Prompt 2: Check for Lowercase Characters

![Password Generator](assets/websiteImages/checkForLowercaseChars.png)

If:
&nbsp;&nbsp;&nbsp;&nbsp;1. Y or y is entered in this prompt then Lowercase Chacters will be included in password
&nbsp;&nbsp;&nbsp;&nbsp;2. Any other character is entered Lowercase Characters will not be included in the password

#### Prompt 3: Check for Uppercase Characters

![Password Generator](assets/websiteImages/checkForUpperercaseChars.png)

If:
&nbsp;&nbsp;&nbsp;&nbsp;1. Y or y is entered in this prompt then Uppercase Chacters will be included in password
&nbsp;&nbsp;&nbsp;&nbsp;2. Any other character is entered Uppercase Characters will not be included in the password

#### Prompt 4: Check for Numbers

![Password Generator](assets/websiteImages/checkForNumbers.png)

If:
&nbsp;&nbsp;&nbsp;&nbsp;1. Y or y is entered in this prompt then Numbers will be included in password
&nbsp;&nbsp;&nbsp;&nbsp;2. Any other character is entered Numbers will not be included in the password

#### Prompt 5: Check for Special Characters

![Password Generator](assets/websiteImages/checkForSpecialChars.png)

If:
&nbsp;&nbsp;&nbsp;&nbsp;1. Y or y is entered in this prompt then Special Characters will be included in password
&nbsp;&nbsp;&nbsp;&nbsp;2. Any other character is entered Special Characters will not be included in the password

#### Error Message: No Character Sets Selected
![Password Generator](assets/websiteImages/NoCharSetsSelected.png)

If no Character Sets were chosen for the new password then this error message is displayed.

When OK is clicked the process to choose Caracter Sets for the password will be repeated.

#### Result
When all necessary data has been entered the website will generate a new password and it will be displayed like this: 

![Password Generator](assets/websiteImages/generatedPasswordScreen.png)

This a 25 character password using all Character Sets.

## Changelog
The development history is recorded in the [Changelog](./CHANGELOG.md).

## Resources Used
1. Bootcamp Materials - Lesson Material from Week 3
2. Prior knowlege and experience
3. [MDM Web Docs][def2] working with objects
4. [MDM Web Docs][def3] loops and iteration
5. Character Sets provided in class as Useful Resources

[def1]: https://dingogap.github.io/03-JavaScript-Password-Generator/
[def2]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_objects
[def3]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration


