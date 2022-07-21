let div2 = document.createElement('div');

let  text = document.createElement('p');

if(localStorage.getItem("text") == null)
  text.innerHTML = "Click to Edit";
else
 text.innerHTML = localStorage.getItem("text");

div2.appendChild(text);

let heading = document.getElementById("heading");
let list = document.getElementById("myfirst");
let container = document.querySelector('.container');

//printing adderss for verification
console.log(div2);

container.insertBefore(div2, list);
//heading.append(div);

//style div
div2.setAttribute('style', 'border:2px solid black; width: 154px; margin: 34px; padding:23px;');

//event handler and event listner
div2.addEventListener("click",fun1);
function fun1(){
    div2.setAttribute("contenteditable","true");
    console.log("jjh");
}

div2.addEventListener("blur",fun2);

function fun2(){
    document.body.style.backgroundColor="red";
    div2.setAttribute("contenteditable","false");
    let new_text = text.innerHTML;
    localStorage.setItem("text",new_text);
}


