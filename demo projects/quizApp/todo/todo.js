
document.addEventListener('DOMContentLoaded', () => {
     
    const todoInput = document.getElementById("to-do-input");
    const addTaskButton = document.getElementById("add-task");
    const todoList = document.getElementById("to-do-list");

    console.log(todoInput);
    console.log(addTaskButton);
    console.log(todoList);

    const task = JSON.parse(localStorage.getItem("task")) || [];


    task.forEach(tasks => {
       
        renderTask(tasks);
    });

    addTaskButton.addEventListener("click", () => {
        const taskText = todoInput.value.trim();
        if (taskText === "") return;
        const newTask = {
            id: Date.now(),
            text: taskText,
            completed: false,
        };
        task.push(newTask);

        todoInput.value = "";
        saveTask();
        console.log(task);
    });

    function renderTask(task) {

        console.log(task);
        const li = document.createElement('li');
        if (task.completed) 
        {
            li.classList.add("completed");
        }
        li.setAttribute('data-id', task.id);
        li.innerHTML = `
        <span> ${task.text}</span>
        <button> delete </button>
        `
        todoList.appendChild(li);
        li.addEventListener('click', (e) => {
            if (e.target.tagName === 'BUTTON') return;
            task.completed = !task.completed
            li.classList.toggle('completed')
            saveTask();
        })

        li.querySelector('button').addEventListener("click", (e) => {
            e.stopPropagation();
            // prevent toggle from fireing 
            // study filter
            task = task.filter((t) => t.id !== task.id);
            li.remove()
            saveTask()
        
        })

    }

    function saveTask() {
        localStorage.setItem("task", JSON.stringify(task));
        // key can be of any type but the value should be always string
    }
});














































