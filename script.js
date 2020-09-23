

const randomFunc = {
    upper: getRandomUpperCase,
    lower: getRandomLowerCase,
    number: getRandomNumber,
    symbol: getRandomSymbol,
};

    myBtn.addEventListener('click', () => {
    var length = (function ask() {
        var n = prompt('How long would you like your password to be.                                 Passwords must be between 8-128 characters.');
        return isNaN(n) || +n > 128 || +n < 8 ? ask() : n;
      }());
    var upperCase = confirm("Would you like to use upper case letters??");
    var lowerCase = confirm("Would you like to use lower case letters?");
    var specialchars = confirm("Would you like to use special characters?");
    var numerics = confirm("Would you like to use numerics?");
    password.placeholder = generatePassword(upperCase, lowerCase, numerics, specialchars, length);
    
});


function generatePassword(lower, upper, number, symbol, length) {



    let generatedPassword = '';

    const typesCount = lower + upper + number + symbol;
    console.log('typesCount: ',typesCount);

    const typesArr = [{ lower }, { upper } , { number }, { symbol} ].filter
       (item => Object.values(item)[0]);

    if (typesCount === 0) {
        alert("Select at least one option")
    }
    for (let i = 0; i < length; i += typesCount) {
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0];

            generatedPassword += randomFunc[funcName]();
        });
    }
    const finalPAssword = generatedPassword.slice(0, length);
    return finalPAssword;
}



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




















