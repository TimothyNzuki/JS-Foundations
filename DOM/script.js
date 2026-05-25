const title = document.getElementById("title");
title.style.color = "blue";

const message = document.getElementsByClassName("message");
message[0].style.backgroundColor = "blue";
message[0].style.color = "white";
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

let joined = false;

const button1 = document.getElementById("btn");
button1.addEventListener("click", () => {
  if (!joined) {
    title1.innerText = "Welcome to Oasis Ambassadors";
    title1.style.color = "blue";

    message.forEach((msg, index) => {
      msg.classList.add("highlight");
      msg.innerText = `You joined! Message ${index + 1}`;
    });

    button1.innerText = "Thanks for joining!";
    button.classList.add("joined");
    joined = true;
  } else {
    title1.innerText = "Hello Dom!";
    title1.style.color = "black";

    message.forEach((msg, index) => {
      msg.classList.remove("highlight");
      msg.innerText = `This is the ${index + 1} message.`;
    });

    button1.innerText = "Join Us";
    button1.classList.remove("joined");
    joined = false;
  }
});

const title1 = document.getElementById("title");
title1.addEventListener("mouseover", () => {
  title1.style.color = "red";
});

title1.addEventListener("mouseout", () => {
  title1.style.color = "black";
});

document.addEventListener("keydown", (event) => {
  console.log("key pressed:", event.key);
  if (event.key === "Enter") {
    alert("You pressed Enter");
  }
});
