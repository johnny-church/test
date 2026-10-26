let msg = document.getElementById("message");
console.log(msg);
let topp = document.getElementById("top");
console.log(topp);

let btn = document.getElementsByName("language") 
console.log(btn);
/*tag names */
let heading = document.getElementsByTagName("h1");
console.log(heading);
/* getElementsByClassName() method returns an array-like of objects of the child elements with a specified class name */

let cont=document.getElementById("container");
let t1  = cont.getElementsByClassName("message");
console.log(t1);


 /*querySelector() & querySelectorAll()*/
  /*returns only the first element since it doesn have the all part */
 let t2 =document.querySelector(".message");
 console.log(t2);

 let t3 =document.querySelectorAll(".message");
 console.log(t3);

 let t4 =cont.querySelectorAll(".message");
 console.log(t4);

/* if the "" part of the queryselector is substituted with div,h1, p etc , it will output all the elements with it */
 let t5=document.querySelectorAll("#message");
 console.log(t5);

/*traversing elements*/

let txt = document.querySelector(".text");
console.log(txt.parentNode);

let parent =document.querySelector(".title"); 
console.log(parent.lastElementChild); /*you can use childNodes to get all the children */

/*selecting next,previous,siblings of an element*/
let second = document.querySelector(".second");
console.log(second.previousElementSibling);

let second1 = document.querySelector(".second");
console.log(second1.nextElementSibling);

/* manipulating Elements*/
let div = document.createElement("div");
div.innerHTML="<p> welcome </P>";
div.className="title2";
document.body.appendChild(div);
console.log(div);

/*appendChild method*/
let menu = document.getElementById("menu");
let list = document.createElement("li");
list.innerHTML ="contact";
menu.appendChild(list);

/*text content*/
/*console.log(menu.textContent);*/ /* shows the textconetent in the console */

/*menu.textContent="hello";*/ /* removes evrythingelse, replaces with hello*/

/* innerHtml*/

menu.innerHTML="<h1>hello!</>";


/*syntaxes
parentNode.append(newNodes);
menu.insertAdjacentHTML(positionName(beforebegin,afterbegin,beforeend,afterend),text(<li>"contact"</li>));
parentNode.replaceChild(newChild,oldChild);
let newNode=originalNode(menu).cloneNode((true)clones with the elements);
parentNode(menu).removeChild(childNode(menu.lastElementChild));
parentNode(menu).insertBefore(newNode,existingNode(menu.fistElementChild));
*/

/* attribute methods */
let inputbox = document.getElementById("username");
console.log(inputbox.attributes);
/* get attributes*/
let inputbox1 = document.getElementById("username1");
console.log(inputbox1.getAttribute("placeholder"));
/*set attribute*/
let inputbox2 = document.getElementById("username2");
inputbox2.setAttribute("class","user");
console.log(inputbox2);
/* hasAttribute*/
let inputbox3 = document.getElementById("username3");
console.log(inputbox3.hasAttribute("class"));
/* removeAttribute*/
let inputbox4 = document.getElementById("username4");
inputbox4.removeAttribute("id");
console.log(inputbox4);

/* manipulating elemant's styles*/

inputbox4.style.padding = "10px"
inputbox4.style.cssText += "width:100px;height:100px";/* without the + it overrides all other css styles */
console.log(inputbox4);

/*getComputedStyle()method*/
console.log(window.getComputedStyle(inputbox).width);

/* className property*/
let john = document.getElementById("john");

/*john.className += " New";*/ /* adds new as a class name , without the + the class name is over written , with the plus , they are all added */
/* john.classList.replace("main","new"); can use remove ,replace or add

console.log(john.classList);*/
console.log(john.classList);
john.classList.toggle("coin");
console.log(john.classList.contains("main"));
console.log(john.classList);

/* class list property ↑  */


/* js events ,, events are actions that happen in the browser , eg  when something is clicked(click event), cursor moved(mouse move evnt),when webpage loads(load event)*/
/* event handlers , a piece of code that will be executed when the event occurs */

/* using html event handler attributes */
/*function displaymsg()
{
    console.log("button clicked from function"); /* when the event occurs , the web browser passed an event to the event handler
}*/


/* hiding event handler name in js*/


let bton = document.getElementById("bton");
bton.onclick = function()
{
    console.log("button clicked");
}

/* addEventListener() & removeEventListener()*/
 /*addEventListener( event ,function , usecapture)*/
 let btton= document.getElementById("btton");
btton.addEventListener('click',function(){
    console.log("button clicked!");
} )

let btton1=document.getElementById("btton1");
function display1()
{
    console.log("clicked!!!!")
}
btton1.addEventListener('click',display1);

/* remove eventlistener*/
/* btton1.removeEventListener('click',display1); */