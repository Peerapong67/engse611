const form = document.querySelector("form");
const todoInput = document.querySelector("#todo-input");
const addButton = document.querySelector("#add-button");
const todoList = document.querySelector("#todo-list");

let todos = [];

function addTodo() {
  //console.log('Hello Guy')
  const todoText = todoInput.value.trim();
  if (todoText.length > 0) {
    const todo = {
      id: Date.now(),
      text: todoText,
      completed: false,
    };

    todos.push(todo);

    todoInput.value = "";

    renderTodos();
  }
}

function toggleCompleted(id) {
  todos = todos.map(todo => {
    if (todo.id === id) {
      todo.completed = !todo.completed;
    }

    return todo;
  });

  renderTodos();
}

function deletetodo(id) {
  //console.log(id);
  todos = todos.filter((todo) => todo.id !== id);
  renderTodos();
}

function renderTodos() {
  todoList.innerHTML = "";

  todos.forEach((todo) => {
    const todoItem = document.createElement("li");
    const todotext = document.createElement("span");
    const todoDeleteButton = document.createElement("button");

    todotext.textContent = todo.text;
    todoDeleteButton.textContent = "Delete";

    todoDeleteButton.addEventListener("click", () => deletetodo(todo.id));

    if (todo.completed) {
      todoItem.classList.add("Completed");
    }

    todoItem.addEventListener("click", () => toggleCompleted(todo.id));

    todoItem.appendChild(todotext);
    todoItem.appendChild(todoDeleteButton);

    todoList.appendChild(todoItem);
  });
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  addTodo();
});

renderTodos();
