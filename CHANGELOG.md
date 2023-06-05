# 03-JavaScript-Password-Generator

## Setup
1. Initialised a Local Repository
2. Created a Remote Repository on Github
3. Pulled Remote Repository from Github

## Development Environment
1. MacOSX Monterey
2. git version 2.37.1 (Apple Git-137.1)
3. VSCode Version: 1.78.2 (Universal)

## Process
1. Created folder structure and copied supplied code (index.html, style.css, script.js) to appropriate locations
2. Added supplied password character sets (upperCase, lowerCase, number and specials) to js
3. Added code to prompt for Password Length & test length is valid
4. Created passwordSettings object which includes possible characters sets, characters used & length of password
5. Split Character Sets and User Options into 2 separate objects - while related characters are pre-defined but users coices are runtime
6. On reflection decided to keep object holding character sets but move user choices to array for simpler processing
7. Added logic to record valid password options in array
8. Add logic to build the password
9. Updated password settings object to hold min & max password lengths and selected character set options
10. updated README.md
11. added test to make sure user chose at least 1 password before trying to  generate password
12. add do while loop so user can try again if they didn't select a characer set
13. move the get next pwd character statement into the password object - passing the character set for clarity
14. move the random character set selector to the password object