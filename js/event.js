let button = document.querySelector("button");  

button.onclick = () =>{
    alert("kya hai");
    console.log("new button is clicked");
}

let button2 = document.querySelector("#but2");  
button2.onclick = (e) =>{               // e - event object
    alert("console me dekh le");
    console.log(e);
    console.log(e.target);
    console.log(e.type);
}

let mode = document.querySelector("#m");
let body = document.querySelector("body");
mode.onclick = () =>{
      
}

//type of event written
// mode. addEventListener( "click" ,() =>{
//     if(body.style.backgroundColor=="black")
//     body.style.backgroundColor="white";
//     else
//     body.style.backgroundColor="black";
// });

function fun(){
    if(body.style.backgroundColor=="black")
    body.style.backgroundColor="white";
    else
    body.style.backgroundColor="black";
}

//type of event written
mode.addEventListener("click", fun);