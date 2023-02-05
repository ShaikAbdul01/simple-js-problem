let num1=5,num2=7;
console.log(num1,num2);

// first  aproching
// const temp=num1;//temp=5
// num1=num2;//num1=7
// num2=temp;//num2=5
// console.log(num1,num2);

// second Aproching
[ num1,num2 ] = [ num2,num1 ];
console.log(num1,num2);

