// functions
alert("bap a gaaya");

console.log(window);
console.log(window.document);
console.log(document.head);

//dynamic changes
document.body.style.backgroundColor = "blue";

let firstEl = document.querySelector("button");  //1st element
console.dir(firstEl);

let sec = document.querySelectorAll(".myClass");    //all eleemnts
console.dir(sec);

firstEl.innerText = "daba lo beta";
firstEl.innerHTML = "<b>bada loo</b>"


//add element
let newBtn = document.createElement("button");
newBtn.innerText = "click me!";
newBtn.style.color = "red";
let p1 = document.querySelector("p");
p1.after(newBtn);