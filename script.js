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
    var passLength = this.prompt("How many characters would you like your password to be?");
    console.log(passLength);
    var characters = '';

    var lowercaseLetters = this.confirm("Would you like the password to include lowercase letters?");
    console.log(lowercaseLetters);
    var lowercaseABC = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    var uppercaseLetters = this.confirm("Would you like this password to include uppercase letters?");
    console.log(uppercaseLetters);
    var uppercaseABC = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    

    var specialConfirm = this.confirm("Would you like this password to include special characters?");
    console.log(specialConfirm);
    var specialChars = ['`', '~', '!', '@', '#', '$', '%', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', ',', '<', '.', '>', '/', '?', '[', '{', ']', '}', '|'];

    var numberConfirm = this.confirm("Would you like this password to include numbers?");
    console.log(numberConfirm);
    var nummerChars = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];


    var passwordPrompts = (lowercaseLetters + ", " + uppercaseLetters + ", " + specialConfirm + ", " + numberConfirm);
    console.log(passwordPrompts);

    var chosenChars = [];

    if (passwordPrompts) {
        chosenChars = lowercaseABC.concat(chosenChars);
    }

    if (uppercaseLetters) {
        chosenChars = uppercaseABC.concat(chosenChars);
    }

    if (specialConfirm) {
        chosenChars = specialChars.concat(chosenChars);
    }

    if (numberConfirm) {
        chosenChars = nummerChars.concat(chosenChars);
    }

    console.log(chosenChars);

    var finalPass;
    for (var i = 0; i <= passLength; i++) {
        finalPass = [Math.floor(Math.random() * chosenChars.length)]
    }

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