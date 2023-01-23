// How to acces Element

// getElementById--

let div = document.getElementById("box1");
console.log(div);
// div.textContent = "Hello"
// div.style.color = "red";

//getElementByClassName--

let divwithClass = document.getElementsByClassName("box-div");
console.log(divwithClass)
console.log("length=", divwithClass.length)
divwithClass[0].textContent="Hello div by class"
divwithClass[1].textContent="2nd Div by Class";
divwithClass[0].style.color="green"

//  getElementByTagName

let divwithTag = document.getElementsByTagName("div");
console.log(divwithTag.length)


// 
quarySelectors
let parawithquary = document.querySelector("para1")
console.log("quary". parawithquary)
para1.style.color ="blue"