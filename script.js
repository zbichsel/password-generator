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

// What types of charcters
// special, number, upper, lower as arrays
var lowercaseABC = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercaseABC = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var specialChars = ['`', '~', '!', '@', '#', '$', '%', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', ',', '<', '.', '>', '/', '?', '[', '{', ']', '}', '|'];
var nummerChars = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

function generatePassword() {
    // prompt how many characters
    var passLength = window.prompt("How many characters would you like your password to be?");
    // cancels function if password is too small or too large
    if (passLength < 8 || passLength > 128) {
        window.alert("Please choose a valid number!");
        return("Please choose a number between 8 - 128!");
    }
    // cancels function if user enters anything not a number or uses a space
    // if (passLength == NaN || " ") {
    //     window.alert("Please enter a valid number!");
    //     return("Please choose a number between 8 - 128!");
    // }
    
    // window.confirm to confirm all choices
    var lowercaseLetters = window.confirm("Would you like the password to include lowercase letters?");
    var uppercaseLetters = window.confirm("Would you like this password to include uppercase letters?");
    var specialConfirm = window.confirm("Would you like this password to include special characters?");
    var numberConfirm = window.confirm("Would you like this password to include numbers?");
    // display choices in console log
    var passwordPrompts = (passLength + ", " + lowercaseLetters + ", " + uppercaseLetters + ", " + specialConfirm + ", " + numberConfirm);
    console.log(passwordPrompts);
    // create parameters for choosing at least one type of the characters to have in password
    if (lowercaseLetters === false && uppercaseLetters === false && specialConfirm === false && numberConfirm === false) {
        window.alert("Please choose at least one of the character types to proceed!");
    }
    // var for charcters
    var chosenChars = [];
    // take all true arrays and concat into new array
    if (lowercaseLetters) {
        chosenChars = chosenChars.concat(lowercaseABC);
    }
    if (uppercaseLetters) {
        chosenChars = chosenChars.concat(uppercaseABC);
    }
    if (specialConfirm) {
        chosenChars = chosenChars.concat(specialChars);
    }
    if (numberConfirm) {
        chosenChars = chosenChars.concat(nummerChars);
    }
    // Use answers to make password
    var finalPass = [];
    // create loop to generate passLength input at beginning of function
    for (var i = 0; i < passLength; i++) {
        // choose random chars from arr based on user input
        var randomPass = chosenChars[Math.floor(Math.random() * chosenChars.length)];

        // var push into new array
        finalPass.push(randomPass);
    }
    console.log(finalPass);
    // return password;
    return finalPass.join("");
}