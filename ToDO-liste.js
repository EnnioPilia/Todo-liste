
class task {
    constructor(name){
        this.name = name
    }
}


class listTask{
    constructor(){
        this.tasks = [];
        this.tasksDiv = document.querySelector(".tasksDiv");
        this.input = document.getElementById("input");
    }

    addTask() {
        const userTask = new task (this.input.value);
        this.tasks.push(userTask);
    }

    displayArray() {
        this.tasks.forEach((el) => {
            const newTask = document.createElement("div");
            newTask.innerText = el.name
            this.tasksDiv.appendChild(newTask)
        })
    }
}

const btn = document.getElementById('button')

const myListTask = new listTask ();

btn.addEventListener("click", (e) => {
    e.preventDefault();
    myListTask.addTask();
    myListTask.displayArray();
})





