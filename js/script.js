// DOM JS Summary

//  get data 

var elements = document.getElementsByClassName("item");
var element = document.getElementById("unique");
var elementag = document.getElementsByTagName("div");
var selector = document.querySelector("body");
var selectors = document.querySelectorAll(".item");

console.log(element);
console.log(elements);
console.log(elementag);
console.log(typeof elements);
console.log(typeof element);
console.log(selector);
console.log(selectors);


var objtoarray = Array.from(elements);
for (var i = 0; i < objtoarray.length; i++) {
    console.log(objtoarray[i]);
}
console.log(typeof objtoarray);

var heading = document.title;
console.log(heading);

//  events

var DivItems = document.querySelectorAll(".item");

function sayHello(userName) {
    console.log("Hello to site, ", userName); 
}

for ( var i = 0; i < DivItems.length; i++) {
    DivItems[i].addEventListener("dblclick", function(){
        sayHello("Abelrhman")
    })
}

document.addEventListener("mousemove", function(){
    console.log("Abdo");
})

var imageback = document.querySelector("img");
imageback.addEventListener("drag",function(){
    console.log("image moved....");
})

document.addEventListener("keydown", function(e){
    if(e.key == 'a') {
        console.log("button a clicked on keyboard")
    }
})

// Manipulation 

var container1 = document.createElement("div");
container1.setAttribute("class", "container");
container1.style.backgroundColor = "#f0f0f0";
container1.style.padding = "15px";
container1.style.margin = "10px";
container1.style.border = "1px solid #ccc";

var para1 = document.createElement("p");
para1.innerHTML = "<strong>This is the first container</strong>";
para1.style.color = "blue";

var textNode1 = document.createTextNode(" - new text added");
para1.appendChild(textNode1);

container1.appendChild(para1);

var container2 = document.createElement("div");
container2.setAttribute("class", "container");
container2.style.backgroundColor = "#e0ffe0";
container2.style.padding = "15px";
container2.style.margin = "10px";
container2.style.border = "1px solid #8bc34a";

var para2 = document.createElement("p");
para2.innerText = "This is the second container";
para2.style.color = "green";

var textNode2 = document.createTextNode(" - new text added");
para2.appendChild(textNode2);

container2.appendChild(para2);

document.body.appendChild(container1);
document.body.appendChild(container2);
