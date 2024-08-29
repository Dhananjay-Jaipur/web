// functions

function fun(){
    console.log("i am doing funnnnn");
}

fun();

//method 
let mul=(a,b)=>{
return a*b;
}

document.write(mul(3,4));
document.write(mul);

let arr = [2,22,222,3]; 

function square(n){
    console.log(n**2); //OR n*n
}

arr.forEach(square);

//map - same as forEach but creates newarray
let narr = arr.map(square);
console.log(narr);

//filter method
let evenArr = arr.filter( (n)=>{
    return n%2===0;
});
console.log(evenArr);


//take input

let n = prompt("enter a number: ");
if(n){
    document.write("\n  ");
    document.write(n, " -> isaka kya karu");
}