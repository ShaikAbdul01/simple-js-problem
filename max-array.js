// function maxTallest(numbers){
//     let larger=numbers[0];
//     for(i=1;i<numbers.length;i++){
//         let element=numbers[i];
//         console.log(element)
//         if(element>larger){
//             larger=element;
//         }     
//     }
//     return larger; 

// }
// let number=[167,190,120,165,137,57]
// let tallest= maxTallest(number) ; 
// console.log('Tallest Person :',tallest);


//lowerest person
function minSmaller(numbers){
    let Smaller=numbers[0];
    for(i=1;i<numbers.length;i++){
        let element=numbers[i];
        console.log(element)
        if(element<Smaller){
            Smaller=element;
        }     
    }
    return Smaller; 

}
let number=[167,19,120,165,137,57]
let smallest= minSmaller(number) ; 
console.log('Smaller Person :',smallest);