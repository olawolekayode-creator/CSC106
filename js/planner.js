let tasks = [];

function addTask() {

const taskInput =
document.getElementById("taskInput");

const task =
taskInput.value.trim();

if(task === ""){
    alert("Please enter a task.");
    return;
}

tasks.push(task);

displayTasks();

taskInput.value = "";

}

function displayTasks(){

const taskList =
document.getElementById("taskList");

taskList.innerHTML = "";

tasks.forEach((task,index)=>{

    const li =
    document.createElement("li");

    li.innerHTML = `
        <span>${task}</span>

        <div>
            <button onclick="completeTask(this)">
                Complete
            </button>

            <button onclick="deleteTask(${index})">
                Delete
            </button>
        </div>
    `;

    taskList.appendChild(li);
});

}

function completeTask(button){
button.parentElement.parentElement
.classList.toggle("completed");
}

function deleteTask(index){
tasks.splice(index,1);
displayTasks();
}
