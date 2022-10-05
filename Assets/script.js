var lowerCase;
var upperCase;
var specialCharactersFish;
var numbersSeaTurtle;

let specialCharacters = ["@", "#", "%", "*", "&"]
let lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r","s", "t", "u", "v", "w", "x", "y", "z"]
let upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "X", "W", "Y", "Z"]
let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
let specialCharactersandNumbers = specialCharacters.concat(numbers);
let allLetters = lowerCaseLetters.concat(upperCaseLetters);

  generatePassword = function() {
    generatePopup = parseInt(prompt('How long would you like your password to be? Enter a value between 9 and 36'));
    while (!generatePopup || generatePopup < 9 || generatePopup > 36) {
      alert('Please enter a value between 9 and 36')
    generatePopup = parseInt(prompt("How long would you like your new password to be?"))
    }
    if (generatePopup) { 
      lowerCase = confirm('Would you like any lowercase letters?');
      console.log(lowerCase);
      upperCase = confirm('Would you like any UpperCase letters?');
      console.log(upperCase);
      specialCharactersFish = confirm('Would you like any special characters?');
      console.log(specialCharactersFish)
      numbersSeaTurtle = confirm('Would you like numbers?');
      console.log(numbersSeaTurtle);
    }
    if (!lowerCase && !upperCase && !specialCharactersFish && !numbersSeaTurtle) {
      userSelection = alert("You must enter a value in ALL fields if you'd like to create a password!");
    }
    else if (lowerCase && upperCase & specialCharactersFish && hnumbersSeaTurtle) {
      userSelection = numbers.concat(specialCharacters, upperCaseLetters, lowercaseLetters);
    }
    else if (lowerCase && upperCase && specialCharactersFish) {
      userSelection = specialCharacters.concat(upperCaseLetters, lowerCaseLetters);
    }
    else if (lowerCase && upperCase && numbersSeaTurtle) {
      userSelection = numbers.concat(upperCase, lowerCase);
    }
    else if (lowerCase && specialCharactersFish && numbersSeaTurtle) {
      userSelection = numbers.concat(specialCharacters, lowerCaseLetters);
    }
    else if (upperCase && specialCharactersFish && numbersSeaTurtle) {
      userSelection = numbers.concat(specialCharacters, upperCaseLetters);
    }
    else if (lowerCase && upperCase) {
      userSelection = lowerCaseLetters.concat(upperCaseLetters);
    }
    else if (lowerCase && specialCharactersFish) {
      userSelection = lowerCaseLetters.concat(specialCharacters);
    }
    else if (lowerCase && numbersSeaTurtle) {
      userSelection = lowerCaseLetters.concat(numbers)
    }
    else if (specialCharactersFish && upperCase) {
      userSelection = specialCharacters.concat(upperCaseLetters)
    }
    else if (numbersSeaTurtle && upperCase) {
      userSelection = numbers.concat(upperCaseLetters);
    }
    else if (numbersSeaTurtle && specialCharactersFish) {
      userSelection = numbers.concat(specialCharacters);
    }
    else if (specialCharactersFish) {
      userSelection = specialCharacters;
    }
    else if (numbersSeaTurtle){
      userSelection = numbers;
    }
    else if (upperCase) {
      userSelection = upperCaseLetters;
    }
    else if (lowerCase) {
      userSelection = lowerCaseLetters;
    }

    let emptyArray = [];
    for (let i = 0; i < generatePopup; i++) {
      console.log(userSelection);
      var mermaidSelection = userSelection[Math.floor(Math.random() * userSelection.length)];
      emptyArray.push(mermaidSelection);
    }
    console.log(emptyArray.join(''));
    return (emptyArray.join(''));
  } 

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