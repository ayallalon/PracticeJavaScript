
function addDashes(numberInput) {
    const numberString = numberInput.toString();
    let new_num = numberString[0];
    for (let i=1; i<numberString.length; i++)
    {
        if(numberString[i] % 2 == 0 && numberString[i-1] % 2 == 0)
            new_num = new_num + "-" + numberString[i];
        else
             new_num = new_num + numberString[i];
    }
    return new_num;
}

console.log(addDashes(225468));

