// Write a JavaScript program that accepts a number
// as input and inserts dashes (-) between each even number.
// For example if you accept 225468 the output should be 0-254-6-8.

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

// Write a JavaScript function to check if an `input`
// is an array or not.
function is_array(input) {
    if (input instanceof Array) return true;
    else return false;
  }
  
  console.log(is_array("w3resource"));
  console.log(is_array([1, 2, 4, 0]));
  


// Write a function to sort the given value based on it's id
const library = [
    { author: "Bill Gates", title: "The Road Ahead", id: 1 },
    { author: "Steve Jobs", title: "Walter Isaacson", id: 3 },
    { author: "Suzanne Collins",title: "Mockingjay: The Final Book of The Hunger Games",id: 2}
  ];

function sortById(input) {
    input.sort((a,b)=> a.id - b.id) ;
    input.forEach(element => {
        console.log(`${element.author}`);
        
    });
   
}
sortById(library);


//Write a JavaScript function that reverses a number.
function reverseNumber(numberInput) {
    let numberString = numberInput.toString();
    let reversNumber = "" ;
    for (let i = numberString.length - 1; i >= 0; i--)
    {
        reversNumber = reversNumber + numberString[i];
    }
    return reversNumber;
}

console.log(reverseNumber(32243));
