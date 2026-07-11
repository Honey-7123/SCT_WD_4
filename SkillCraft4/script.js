let tasks=[];


function addTask(){

    let task=document.getElementById("task").value;
    let date=document.getElementById("date").value;


    if(task===""){
        alert("Enter a task");
        return;
    }


    let obj={

        name:task,
        date:date,
        completed:false

    };


    tasks.push(obj);

    displayTasks();


    document.getElementById("task").value="";
    document.getElementById("date").value="";

}



function displayTasks(){

    let list=document.getElementById("taskList");

    list.innerHTML="";


    tasks.forEach((task,index)=>{


        let li=document.createElement("li");


        if(task.completed)
        {
            li.classList.add("completed");
        }


        li.innerHTML=

        `
        <b>${task.name}</b>
        <br>
        📅 ${task.date || "No Date"}

        <div class="task-buttons">

        <button onclick="completeTask(${index})">
        Complete
        </button>


        <button onclick="editTask(${index})">
        Edit
        </button>


        <button onclick="deleteTask(${index})">
        Delete
        </button>

        </div>
        `;


        list.appendChild(li);


    });


}




function completeTask(index){

    tasks[index].completed =
    !tasks[index].completed;

    displayTasks();

}




function editTask(index){

    let newTask=
    prompt(
    "Edit task:",
    tasks[index].name
    );


    if(newTask){

        tasks[index].name=newTask;

        displayTasks();

    }

}




function deleteTask(index){

    tasks.splice(index,1);

    displayTasks();

}