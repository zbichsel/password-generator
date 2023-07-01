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
    // prompt how many characters
    var passLength = prompt("How many characters would you like your password to be?");
    // var characters = '';
    
    // What types of charcters
    // special, number, upper, lower
    // vars that include all possible charcters 
    // seperate vars for each type, arrays
    // example var upperLetters = ["A", "B", "C"]
    var lowercaseLetters = window.confirm("Would you like the password to include lowercase letters?");
    var lowercaseABC = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    
    var uppercaseLetters = window.confirm("Would you like this password to include uppercase letters?");
    var uppercaseABC = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    
    var specialConfirm = window.confirm("Would you like this password to include special characters?");
    var specialChars = ['`', '~', '!', '@', '#', '$', '%', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', ',', '<', '.', '>', '/', '?', '[', '{', ']', '}', '|'];
    // window.confirm to confirm all choices

    var numberConfirm = window.confirm("Would you like this password to include numbers?");
    var nummerChars = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

    var passwordPrompts = (passLength + ", " + lowercaseLetters + ", " + uppercaseLetters + ", " + specialConfirm + ", " + numberConfirm);

    if (lowercaseLetters === false && uppercaseLetters === false && specialConfirm === false && numberConfirm === false) {
        alert("Please choose at least one of the character types to proceed!");
    }
    // var for charcters
    var chosenChars = [];
    // take all true arrays and concat into new array -loop
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
writePassword();