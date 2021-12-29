'use strict'

const readableNumbers = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
]

const dozens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];


module.exports = function toReadable(number) {

    let finNumber = 0;
    const numberToDigits = [];

    const numberToString = String(number); // приводим число к строке

    for (let i = 0; i < numberToString.length; i++) {
        numberToDigits.push(Number(numberToString[i]));      // приводим строку к массиву цифр, из которых состоит исходное число   
    }


    if (numberToDigits.length === 1) {
        finNumber = readableNumbers[numberToDigits[0]];
    } else if (numberToDigits.length === 2 && numberToDigits[0] === 1) {
        finNumber = readableNumbers[Number('1' + numberToDigits[1])];
    } else if (numberToDigits.length === 2 && (numberToDigits[1] === 0)) {
        finNumber = dozens[numberToDigits[0]];
    } else if (numberToDigits.length === 2 && (numberToDigits[0] >= 2 && numberToDigits[0] <= 9)) {
        finNumber = dozens[numberToDigits[0]] + " " + readableNumbers[numberToDigits[1]];
    } else if (numberToDigits.length === 3) {
        if (numberToDigits[1] === 0 && numberToDigits[2] === 0) {
            finNumber = readableNumbers[numberToDigits[0]] + " hundred";
        } else if (numberToDigits[1] === 0 && numberToDigits[2] !== 0) {
            finNumber = readableNumbers[numberToDigits[0]] + " hundred " + readableNumbers[numberToDigits[2]];
        } else if (numberToDigits[2] === 0 && (numberToDigits[1] >= 2 && numberToDigits[1] <= 9)) {
            finNumber = readableNumbers[numberToDigits[0]] + " hundred " + dozens[numberToDigits[1]];
        } else if (numberToDigits[1] === 1) {
            finNumber = readableNumbers[numberToDigits[0]] + " hundred " + readableNumbers[Number('1' + numberToDigits[2])];
        } else if (numberToDigits[1] > 1 && numberToDigits[1] <= 9) {
            finNumber = readableNumbers[numberToDigits[0]] + " hundred " + dozens[numberToDigits[1]] + " " + readableNumbers[numberToDigits[2]];
        } else {
            finNumber = readableNumbers[numberToDigits[0]] + " hundred " + dozens[numberToDigits[1]];
        }
    }

    console.log(finNumber);
    return finNumber;

}
