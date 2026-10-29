// Exercise 2 - Task Board
// Write all your code in this file. Read README.md for the full instructions.
// Run the tests with: npm test

// Step 1: add a task on submit (no reload, clear + focus the input, "Please type a task" error)
const task_input = document.getElementById("task-input");
const priority_select = document.getElementById("priority-select");
const add_btn = document.getElementById("add_btn");
const task_list = document.getElementById("task-list");
const empty_line = document.getElementById("empty");
const left_tasks = document.getElementById("left");
const error = document.getElementById("error");

let priority;
priority_select.addEventListener("change", () => {
  priority = priority_select.value;
});

add_btn.addEventListener("click", () => {
  const list_row = document.createElement("li");

  const li_of_list = task_list.querySelectorAll("li");
  for (const li of li_of_list) {
    if (task_input.value.trim() === li.textContent.trim()) {
      error.textContent = "This task already exists";
      error.classList.add("error");
      error.hidden = false;
      return;
    }
  }

  error.textContent = " ";
  error.classList.remove("error");
  list_row.textContent = task_input.value;
  list_row.classList.add("li");
  empty_line.textContent = " ";
  list_row.classList.add(`priority-${priority}`);
  task_list.appendChild(list_row);
  left_tasks.textContent = Number(left_tasks.textContent) + 1;
});
// Step 2: click a task to toggle the "done" class

// Step 3: delete with the x button (one listener on the ul - event delegation)

// Step 4: "tasks left" counter

// Step 5: filters (All / Active / Done)

// Step 6: Clear completed

// Step 7: show the empty message only when there are no tasks

// Bonus: block duplicate tasks ("This task already exists")
