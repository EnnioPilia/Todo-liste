
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
     
        if (input.value === "" || input.value === null){
            alert("saisi incorect")
            this.tasks.reset()
        }else{
            this.tasks.push(userTask);
        }
    }

    displayArray() {
        this.tasksDiv.innerHTML = ""
        this.tasks.forEach((task) => {
            const newTask = document.createElement("li");
            const taskName = document.createElement("span");
            const deletBtn = document.createElement("button")

            taskName.innerText = task.name
            deletBtn.innerText = "supprimer"


            this.tasksDiv.appendChild(newTask)
            newTask.appendChild(taskName)
            newTask.appendChild(deletBtn)

            deletBtn.className = "btn btn-danger"
            newTask.className = "list-group-item d-flex flex-row justify-content-between"
            deletBtn.addEventListener("click", () => {
                this.tasks = this.tasks.filter((t) => t !== task);
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





