document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById("to-do-input");
    const addTask = document.getElementById("add-task");
    const todoList = document.getElementById("to-do-list");

    console.log(todoInput);
    console.log(addTask);
    console.log(todoList);

    const tasks = JSON.parse(localStorage.getItem("task")) || [];

    tasks.forEach((t1) => {
        renderTask(t1);
    });

    addTask.addEventListener("click", () => {
      const taskText = todoInput.value.trim();
      if (taskText === "") return;

      const newTask = {
        id: Date.now(),
        text: taskText,
        completed: false,
      };

      tasks.push(newTask);
      saveTask();
      todoInput.value = ""; // clear input
      console.log(tasks);
    });

    function renderTask(task) {
      console.log(task);
      const li = document.createElement("li");
      li.setAttribute("data-id", task.id)
      if (task.completed) li.classList("completed");

      li.innerHTML = `
      <span>${task.text}</span>
      <button>delete</button>
      `;
      li.addEventListener("click", (e) => {
        if (e.target.tagName === "BUTTON") return;
        task.completed = !task.completed;
        li.classList.toggle("completed");
        saveTask();
      })

      li.querySelector('button').addEventListener('click', (e) => {
        e.stopPropagation();
        task = tasks.filter(t => t.id !== tasks.id);
        li.remove();
        saveTask();
      })
      todoList.appendChild(li);
      

    }

    function saveTask() {
      localStorage.setItem("task", JSON.stringify(tasks));
    }

})
