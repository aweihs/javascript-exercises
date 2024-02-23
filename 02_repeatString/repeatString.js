const repeatString = function(strInput, intMany) {

    if(intMany < 0) {

        return 'ERROR';

    } else {

        let finalString = '';

        for(i=0; i < intMany; i++) {

            finalString += strInput;

        }

        return finalString;

    }

};

// Do not edit below this line
module.exports = repeatString;
