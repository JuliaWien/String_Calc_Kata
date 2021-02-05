const { number } = require("yargs");

function stringCalc(numbers) 
{
    var parts, number, result;
 

    if (numbers === '')
        return '';


    parts = numbers.split(/,|\n/);

    result = 0;

    if (numbers.length >= 4 && numbers[0] === '/' && numbers[1] === '/' && numbers[3] === '\n') {
        var delim = numbers[2];
        parts = numbers.substring(4).split(delim);
    }

    for (i = 0; i < parts.length; ++i) {
        if (parts[i] != '') {
            number = Number(parts[i]);
            result += number;
        }
    }
    return result;
}

module.exports =
{
    stringCalc
}