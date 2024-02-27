const sumAll = function(valOne, valTwo) {

    let sum = 0;

    if (valOne < 0 || valTwo < 0) return 'ERROR';
    if (!Number.isInteger(valOne) || !Number.isInteger(valTwo)) return 'ERROR';

    if(valOne > valTwo) {

        for(i = valTwo; i < valOne + 1; i++) {
            sum += i;
        }

        return sum;

    } else if(valOne < valTwo) {

        for(i = valOne; i < valTwo + 1; i++) {
            sum += i;
        }

        return sum;

    } else {

        sum = valOne + valTwo;
        return sum;

    }
};

// Do not edit below this line
module.exports = sumAll;
