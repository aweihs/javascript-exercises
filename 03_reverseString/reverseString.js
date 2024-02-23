const reverseString = function(input) {

    let stringNorm = input;
    let reverseStringVal = input.split('');
    let arrStringNorm = input.split('');

    if(input === '') {

        return '';

    } else {

        for(i=0; i < stringNorm.length + 1; i++) {

            reverseStringVal.push(arrStringNorm[arrStringNorm.length - i]);
            reverseStringVal.shift();

        }

        return reverseStringVal.join('');

    }

};

// Do not edit below this line
module.exports = reverseString;
