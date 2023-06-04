// Generate random integer between min and max (inclusive)
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generate secure password based on the selected criteria
function generatePassword() {
  // Prompt for password length
  var length = parseInt(prompt('Enter the length of the password (between 8 and 128 characters):'));

  // Validate the password length
  if (isNaN(length) || length < 8 || length > 128) {
    alert('Invalid password length. Please try again.');
    return;
  }
}

// Prompt for character types
var includeLowercase = confirm('Include lowercase characters?');
var includeUppercase = confirm('Include uppercase characters?');
var includeSpecial = confirm('Include special characters?');
var includeNumeric = confirm('Include numeric characters?');

// Validate at least one character type is selected
if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
  alert('You must select at least one character type. Please try again.');
  return;
}

// Adding event listener to generate button
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener('click', function () {

// Write password to the #password input
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  if (password) {
  passwordText.value = password;
  }
})