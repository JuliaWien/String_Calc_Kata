const { number } = require("yargs");

function stringCalc(numbers) 
{
    let parts, number, result;

    if (numbers == '')
        return '';

    parts = numbers.split(',');
    number = Number(parts[0]);

    if (parts.length == 2) 
    {
       return Number(parts[0]) + Number(parts[1]);
    }
    
    result = number;
    return result;
}

module.exports =
{
    stringCalc
}