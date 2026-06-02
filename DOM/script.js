/*const title = document.getElementById("title");
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

const title2 = document.getElementById("Class-list");
title2.style.color = "blue";
title2.style.fontSize = "30px";

title2.addEventListener("mouseover", () => {
  title2.style.backgroundColor = "gray";
});
title2.addEventListener("mouseout", () => {
  title2.style.backgroundColor = "white";
});

const input = document.getElementById("student-list");
const button = document.getElementById("button-submit");
const list = document.getElementById("empty-list");

/*button.addEventListener("click", () => {
  const name = input.value.trim();

  if (name === "") {
    alert("Please Enter Student Name!");
    return;
  }

  const li = document.createElement("li");
  li.innerText = name;

  const deletebutton = document.createElement("button");
  deletebutton.innerText = "x";
  deletebutton.style.fontSize = "10px";

  deletebutton.addEventListener("click", () => {
    list.removeChild(li);
  });

  li.appendChild(deletebutton);

  list.appendChild(li);

  input.value = "";
});

// Loading students from  local storage.

let students = JSON.parse(localStorage.getItem("students")) || [];
renderList();

// Add Student.

button.addEventListener("click", () => {
  const name = input.value.trim();

  if (name === "") {
    alert("Please enter student name!");
    return;
  }

  students.push(name);
  localStorage.setItem("students", JSON.stringify(students));
  renderList();
  input.value = "";
});

function renderList() {
  list.innerHTML = "";

  students.forEach((student, index) => {
    const li = document.createElement("li");
    li.innerText = student;

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "x";
    deleteBtn.style.marginLeft = "10px";
    deleteBtn.style.fontSize = "10px";

    deleteBtn.addEventListener("click", () => {
      students.splice(index, 1);
      localStorage.setItem("students", JSON.stringify(students));
      renderList();
    });

    li.appendChild(deleteBtn);

    list.appendChild(li);

    button.style.overscroll
  });
}*/

// MANIPULATION OF THE SEARCH BOX.

const title = document.getElementById("search-Title");
const input = document.getElementById("search-Bar");
const event = document.getElementById("unordered-List");
const eventList = event.getElementsByTagName("li");

input.addEventListener("input", () => {
  const query = input.value.toLowerCase();

  for (let i = 0; i < eventList.length; i++) {
    const items = eventList[i];
    const text = items.textContent.toLowerCase();

    if (text.includes(query)) {
      items.style.display = "";
    } else {
      items.style.display = "none";
    }
  }
});
