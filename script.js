// Assignment Code
var generateBtn = document.querySelector("#generate");


function getPasswordOptions() {

  // Variable to store length of password from user input
  var length = parseInt(
    prompt('How many characters would you like your password to contain?'),
    10
  );

  // Conditional statement to check if password length is a number. Prompts end if this evaluates false
  if (Number.isNaN(length)) {
    alert('Password length must be provided as a number');
    return null;
  }
  // Conditional statement to check if password length is at least 8 characters. Prompts end if this evaluates false
  if (length < 8) {
    alert('Password must be at least 8 characters');
    return null;
  }

  // Variable to store boolean regarding the inclusion of lower case characters
  var hasLowerCase = confirm(
    'Click OK to confirm including lowercase characters.'
  );
  // Variable to store boolean regarding the inclusion of upper case characters
  var hasUpperCase = confirm(
    'Click OK to confirm including uppercase characters.'
  );
  // Variable to store boolean regarding the inclusion of numeric characters
  var hasNumbers = confirm(
    'Click OK to confirm including numeric characters.'
  );
  // Variable to store boolean regarding the inclusion of special characters
  var hasSpecialCharacters = confirm(
    'Click OK to confirm including special characters.'
  );

  // Conditional statement to check if at least one character type has been selected
  if (hasLowerCase === false && hasUpperCase === false && hasNumbers === false && hasSpecialCharacters === false) {
    alert('Password needs to contain at least one character type in order to be generated.');
    return null;
  }

   // Object to store user input
   var passwordOptions = {
    length: length,
    lower: hasLowerCase,
    upper: hasUpperCase,
    numeric: hasNumbers,
    special: hasSpecialCharacters
   }

   return passwordOptions;
}

var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-", ".",",","/",":",";","?","[","]","{","}", "`", "~", "|", "<", ">", "=", "-", "_"];

// Function for getting a random element from an array(all instances of arr will be replaced by an ACTUAL VALUE when we do our callback.)
function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];

  return randElement;
}

// Function to generate password with user input
function generatePassword() {

  var options = getPasswordOptions();
  // Variable to store password as it's being concatenated
  var result = [];

  // Array to store types of characters to include in password
  var possibleCharacters = [];

  // Array to contain one of each type of chosen character to ensure each will be used
  var guaranteedCharacters = [];

  // Check if an options object exists, if not exit the function
  if (!options) return null;

   // Conditional statement that adds array of special characters into array of possible characters based on user input
  // Push new random special character to guaranteedCharacters
  if (options.hasSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    guaranteedCharacters.push(getRandom(specialCharacters));
  }

  


    // Transform the result into a string and pass into writePassword
    return result.join('');
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
