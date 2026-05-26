// THE WORLD OF DOM!

/**1.  Dynamic Student List Manager*

You are building a simple interface for managing a class list.

Problem Statement:
Create a web page with:

- An input field for entering a student’s name
- An "Add Student" button
- An empty list displayed on the page

Requirements:

- When the button is clicked, the student’s name should be added as a new list item (<li>) in the list
- Each list item must include an "X" button
- Clicking "X" should delete that specific student from the list
- Prevent adding empty names*/

const headingOne = document.getElementById("h-tag");
headingOne.addEventListener("mouseover", () => {
  headingOne.style.color = "blue";
});

headingOne.addEventListener("mouseout", () => {
  headingOne.style.color = "black";
});

/*const input = document.getElementById("student-input");
const addBtn = document.getElementById("add-btn");
const studentList = document.getElementById("student-list");

addBtn.addEventListener("click", () => {
  const name = input.value.trim();

  if (name === "") {
    alert("Please enter student name!");
    return;
  }

  const li = document.createElement("li");
  li.innerText = name;

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "x";
  deleteBtn.style.marginLeft = "10px";

  deleteBtn.addEventListener("click", () => {
    studentList.removeChild(li);
  });

  li.appendChild(deleteBtn);

  studentList.appendChild(li);

  input.value = "";
});*/

// THE UPGRADE.

/*2. Student List Manager (with Persistence)*

Upgrade your student list app so that added students are saved even after the page reloads.

New Requirements:

- When a student is added:
- Save the updated list to localStorage
When the page loads:
- Retrieve students from localStorage
- Render them into the DOM automatically
When a student is removed:
- Update localStorage accordingly*/

const input = document.getElementById("student-input");
const addBtn = document.getElementById("add-btn");
const studentList = document.getElementById("student-list");

// 🔹 Load students from localStorage when page loads

let students = JSON.parse(localStorage.getItem("students")) || [];
renderList();

// Add Student.

addBtn.addEventListener("click", () => {
  const name = input.value.trim();

  if (name === "") {
    alert("Please enter the students name");
    return;
  }

  students.push(name); // add to array
  localStorage.setItem("students", JSON.stringify(students)); // Save
  renderList(); // Update the DOM.
  input.value = "";
});

// Render list function

function renderList() {
  studentList.innerHTML = ""; // Clears old list.

  students.forEach((student, index) => {
    const li = document.createElement("li");
    li.innerText = student;

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "x";
    deleteBtn.style.marginLeft = "10px";

    deleteBtn.addEventListener("click", () => {
      students.splice(index, 1); // Remove from array
      localStorage.setItem("students", JSON.stringify(students)); // update local storage.
      renderList(); // re-render.
    });

    li.appendChild(deleteBtn);

    studentList.appendChild(li);
  });
}

console.log(localStorage.getItem("students"));
