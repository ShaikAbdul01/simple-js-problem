function reverseWord(str){
    const words= str.spilt(' ');
    const result= [];
    for (let i=words.length-1; i>=0; i--){
        let element= words[i];
        result.push(element);
    }
console.log(result)
}

let string='I am a good boy!!';
reverseWord(string);