const { number } = require("yargs");

function stringCalc(numbers) 
{
    var parts, number, result;
    
    if (numbers == '')
        return '';
    
 
    parts = numbers.split(/,|\n/);

    console.log(parts)
    result = 0;
    for (i = 0; i < parts.length; ++i) {
        if (parts[i]!='')
        {
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