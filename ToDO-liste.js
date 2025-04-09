
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
        this.tasksDiv.innerHTML = ""
        this.tasks.forEach((task) => {
            const newTask = document.createElement("div");
            
            newTask.innerText = task.name
            this.tasksDiv.appendChild(newTask)
            const deletBtn = document.createElement("button")
            deletBtn.innerText = "supprimer"
            newTask.appendChild(deletBtn)

            newTask.style.display = 'flex';
            newTask.style.flexDirection = 'row';
            newTask.style.justifyContent = 'flex-end';
            newTask.style.padding = "10px"
            deletBtn.addEventListener("click", () => {
                newTask.remove()
            })
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





