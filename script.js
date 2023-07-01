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
    var characters = '';

    var lowercaseLetters = confirm("Would you like the password to include lowercase letters?");
    var lowercaseABC = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    var uppercaseLetters = confirm("Would you like this password to include uppercase letters?");
    var uppercaseABC = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    

    var specialConfirm = confirm("Would you like this password to include special characters?");
    var specialChars = ['`', '~', '!', '@', '#', '$', '%', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', ',', '<', '.', '>', '/', '?', '[', '{', ']', '}', '|'];

    var numberConfirm = confirm("Would you like this password to include numbers?");
    var nummerChars = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];


    var passwordPrompts = (passLength + ", " + lowercaseLetters + ", " + uppercaseLetters + ", " + specialConfirm + ", " + numberConfirm);
    console.log(passwordPrompts);

    if (lowercaseLetters === false && uppercaseLetters === false && specialConfirm === false && numberConfirm === false) {
        alert("Please choose at least one of the character types to proceed!");
    }

    var chosenChars = [];

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
    console.log(chosenChars);

    var finalPass = '';
    for (var i = 0; i < passLength; i++) {
        var randomPass = chosenChars[Math.floor(Math.random() * chosenChars.length)];

        finalPass += chosenChars[randomPass];
    }


    console.log(finalPass);
    return finalPass;
    // var for charcters
    // What types of charctyers
    // special, number, upper, lower
    // window.confirm

    // Use answers to make password
    // vars that include all possible charcters 
    // seperate vars for each type, arrays
    // example var upperLetters = ["A", "B", "C"]

    // take all true arrays and concat into new array -loop
    // choose random chars from arr based on user input
    // var push into new array
    // var password = turn array into string .toString()

    // return password;

}
writePassword();