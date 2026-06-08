const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
const historyList = document.getElementById("history-list");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "C") {
      display.value = "";
    } else if (value === "DEL") {
      display.value = display.value.slice(0, -1);
    } else if (value === "=") {
      try {
        let expression = display.value
          .replace(/√/g, "Math.sqrt")
          .replace(/\^/g, "**");
        const result = eval(expression);
        display.value = result;
        addToHistory(expression, result);
      } catch {
        display.value = "Error";
      }
    } else {
      display.value += value;
    }
  });
});

// Keyboard support

document.addEventListener("keydown", (event) => {
  if (event.key.match(/[0-9+\-*/%^]/)) {
    display.value += event.key;
  } else if (event.key === "Enter") {
    try {
      let expression = display.value
        .replace(/\^/g, "**")
        .replace(/√/g, "Math.sqrt");
      const result = eval(expression);
      display.value = result;
      addToHistory(expression, result);
    } catch {
      display.value = "Error";
    }
  } else if (event.key === "Backspace") {
    display.value = display.value.slice(0, -1);
  } else if (event.key === "Escape") {
    display.value = "";
  }
});

//  Save to localstorage

function addToHistory(expression, result) {
  const li = document.createElement("li");
  li.textContent = `${expression} = ${result}`;
  historyList.appendChild(li);

  let history = JSON.parse(localStorage.getItem("calcHistory")) || [];
  history.push(`${expression} = ${result}`);
  localStorage.setItem("calcHistory", JSON.stringify(history));
}

// Dark mode

const toggleDark = document.getElementById("toggle-dark");

toggleDark.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Load from localstorage

window.addEventListener("load", () => {
  let history = JSON.parse(localStorage.getItem("calcHistory")) || [];
  history.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    historyList.appendChild(li);
  });
});
