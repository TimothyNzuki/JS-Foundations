const title = document.getElementById("title");
title.style.color = "blue";

const message = document.getElementsByClassName("message");
message[0].style.backgroundColor = "red";
message[1].style.backgroundColor = "blueviolet";

const button = document.querySelector("button");
button.style.backgroundColor = "green";

const btn = document.querySelector("#btn");
btn.textContent = "Submit";

const paragraph = document.getElementsByTagName("p");
paragraph[0].style.fontSize = "20px";

const messages = document.querySelector(".message");
messages.textContent = "Changed with query selector";

const spanDiv = document.querySelector("div span");
spanDiv.style.color = "black";

console.log("title");
console.log("message");
console.log("button");
console.log("btn");
console.log("messo");
console.log("paragraph");
