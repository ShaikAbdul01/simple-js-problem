// Includes 


let search='Strings are useful for holding data that can be represented in text form. Some of the most-used operations on strings are to check their length, to build and concatenate them using the + and += string operators, checking for the existence or location of substrings with the indexOf() method, or extracting substrings with the substring() method.'

console.log(search.includes('location'));


const searchString='strings';
console.log(searchString.toUpperCase());


const searchLowerCase=search.toLowerCase();
const doesExist=searchLowerCase.includes(searchString);
console.log(doesExist);


console.log(search.toUpperCase().includes(searchString));


// console.log(search.toUpperCase());


//indexOf()
console.log(search.indexOf('them'));
console.log(search.indexOf('Me'));
console.log(search.indexOf('Strings'));

if(search.indexOf('f)rm') !== -1){
    console.log('inside the String');
}
else{
    console.log('cannot find it');
}



//StartWith
console.log(search.startsWith('Strings'))


//endsWith

let fileName='biodata.pdf'
let otherFile='biodata.jpg';
console.log(fileName.endsWith('.pdf'));
console.log(otherFile.endsWith('.png'));
 