//Creating an object for randomFunc so generatePassword can draw from generateRandomxxxx funcs

var randomFunc = {
    upper: getRandomUpperCase,
    lower: getRandomLowerCase,
    number: getRandomNumber,
    symbol: getRandomSymbol,
};


// event listener that waits for button click, then prompts user to give length and parameters of the password
// also created a function that forces a user to select a number between 8 and 128 for length. 
// takes the generatePassword return and publishes it to password field

    myBtn.addEventListener('click', () => {
    var length = (function ask() {
        var n = prompt('How long would you like your password to be.                                 Passwords must be between 8-128 characters.');
        return isNaN(n) || +n > 128 || +n < 8 ? ask() : n;
      }());
    var upperCase = confirm("Would you like to use upper case letters??");
    var lowerCase = confirm("Would you like to use lower case letters?");
    var specialchars = confirm("Would you like to use special characters?");
    var numerics = confirm("Would you like to use numerics?");
    password.textContent = generatePassword(upperCase, lowerCase, numerics, specialchars, length);
    
});


// this function checks the types and number of types of parameters selected from the user prompts and generates a random password from the "getRandomxxx functions in the randomFunc object" for the specified user password length

function generatePassword(lower, upper, number, symbol, length) {

    let generatedPassword = '';

    var typesCount = lower + upper + number + symbol;
    console.log('typesCount: ',typesCount);

    var typesArr = [{ lower }, { upper } , { number }, { symbol} ].filter
       (item => Object.values(item)[0]);

    if (typesCount === 0) {
        alert("Select at least one option")
    }
    for (let i = 0; i < length; i += typesCount) {
        typesArr.forEach(type => {
            var funcName = Object.keys(type)[0];

            generatedPassword += randomFunc[funcName]();
        });
    }
    var finalPAssword = generatedPassword.slice(0, length);
    return finalPAssword;
}
// these functions draw from character code to choose a random letter/number 

function getRandomUpperCase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomLowerCase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
    var symbol = "!@#$%^&*(){}[]=<>/,.|~?";
    return symbol[Math.floor(Math.random() * symbol.length)];
}




















