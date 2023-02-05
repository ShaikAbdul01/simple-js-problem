


// function reverse(text){
//     for(let i=text.length -1;i>=0;i--){
//         let element=text[i];
//         console.log(element);
//     }
// }
// string='I am a good boy';
// let strings=reverse(string);

//reverse

// function reverseString(text){
//     let reverse=['']
//     for(let i=text.length -1;i>=0;i--){
//         let element=text[i];
//         reverse+=element
//         console.log(element,reverse);
//     }
    
    
// }
// string='I am a good boy';
// let strings=reverseString(string);
  


function mystring(text){
    const word= text.split(' ');
    let reverse=['']
    for(let i=word.length-1;i>=0;i--){
        let element=word[i];
        element.push ("reverse")
        console.log(word,reverse);
    }
}
string='I am a good boy';
mystring(string);



// function sumArray(numbers){
//     let sum=0;
//     for(let i=0; i<=numbers.length -1;i++){
//         let element=numbers[i];
//         sum+=element;
//         console.log(element,sum);
//     }
    
// }
// let array=[1,2,3,4,5,6,7,8,9]
// let theArray= sumArray(array);


// function sumArray(numbers){
//     let sum=0;
//     let reverse=[' ']
//     for(let i=numbers.length -1; i>=0 ;i--){
//         let element=numbers[i];
//         reverse+=element;
//         sum+=reverse;
//         console.log(element,reverse,sum);
//     }
    
// }
// let array=[1,2,3,4,5,6,7,8,9]
// let theArray= sumArray(array);


