let add = document.querySelector("#add");
let newTask = document.querySelector("#new-task");
let contentTask = document.querySelector("#content-task");
ct = 0;
let containerAlert = document.querySelector("#container-alert");
let details = document.querySelector("#ver-detalhes");
let modal = document.querySelector("#modal");
let buttonClose = document.querySelector("#close");
let completedText = document.querySelector("#completed-text");
let contentTaskCompleted = document.querySelector("#content-task-completed");

function adicionar(){
    if(newTask.value.trim().replace(/\s+/g, ' ') != ""){
        let task = document.createElement("div");
        task.className = 'task';

        let inputCheck = document.createElement("input");
        let labelCheck = document.createElement("label");
        inputCheck.type = "checkbox";        
        inputCheck.name = "check";        
        inputCheck.id = `check${ct}`;
        inputCheck.hidden = true;

        labelCheck.className = "check";
        labelCheck.htmlFor = `check${ct}`;

        let newHr = document.createElement("hr");
        newHr.className = "risco";
        
        let inputText = document.createElement("input");
        inputText.type = "text";        
        inputText.className = "input-task";
        inputText.value = newTask.value;
        inputText.disabled = true;

        let divButtons = document.createElement("div");
        divButtons.className = "butons";

        let buttonEdt = document.createElement("button");
        let buttonExc = document.createElement("button");
        buttonEdt.className = "btn edt";
        buttonEdt.textContent = "Editar";
        buttonExc.className = "btn exc";
        buttonExc.textContent = "Excluir";


        contentTask.appendChild(task);
        task.appendChild(inputCheck);
        task.appendChild(labelCheck);
        task.appendChild(newHr);
        task.appendChild(inputText);
        task.appendChild(divButtons);

        divButtons.appendChild(buttonEdt);
        divButtons.appendChild(buttonExc);

        buttonEdt.addEventListener("click", function(){
            if(buttonEdt.classList.contains("edt")){
                inputText.disabled = false;
                inputText.classList.remove('normal')
                inputText.classList.add('hover');
                buttonEdt.classList.remove('edt');
                buttonEdt.classList.add('save');
                buttonEdt.textContent = "Salvar";
            }
            else{
                inputText.disabled = true;
                inputText.classList.remove('hover')
                inputText.classList.add('normal');
                buttonEdt.classList.remove('save');
                buttonEdt.classList.add('edt');
                buttonEdt.textContent = "Editar";
            }
            
        });

        buttonExc.addEventListener("click", function(){
            task.remove();
        });


        
        newTask.value = "";
        ct++;
    }
    else{
        let divAlert = document.createElement("div");
        divAlert.className = "alert";
        divAlert.style.marginLeft = "100%";
        
        let div = document.createElement("div");

        let alertIcon = document.createElement("div");
        alertIcon.className = "alert-icon";

        let alertCircle = document.createElement("div");
        alertCircle.className = "alert-circle";

        let icon = document.createElement("i")
        icon.className = "fa-solid fa-exclamation";

        let alertText = document.createElement("div");
        alertText.className = "alert-text";
        alertText.textContent = "Você não pode adicionar uma tarefa vazia";

        let alertTime = document.createElement("div");
        alertTime.className = "alert-time";


        containerAlert.appendChild(divAlert);
        divAlert.appendChild(div);
        div.appendChild(alertIcon);
        alertIcon.appendChild(alertCircle);
        alertCircle.appendChild(icon);
        div.appendChild(alertText);
        divAlert.appendChild(alertTime);
        
        setTimeout(function(){
            divAlert.style.animation = "forwards .5s diminui";
        },4500);

        setTimeout(function(){
            divAlert.remove();
        },5000);

    }
}

function showTaskCompleted(){
    let inputTask = querySelectorAll(".input-task");
    completedTask.forEach(e,index => {
        let taskCompleted = document.createElement("div");
        taskCompleted.textContent = inputTask[index].value;
        contentTaskCompleted.appendChild(taskCompleted)
    });
}

function detalhes(){
    let completedTask = document.querySelectorAll('input[type="checkbox"]:checked')
    let totalTask = document.querySelectorAll('input[type="checkbox"]').length
    modal.classList.remove("disabled");
    modal.classList.add("active");

    if(completedTask.length == 0){
        completedText.textContent = `Você ainda não completou nenhuma tarefa`;
    }
    else if(completedTask.length == 1){
        completedText.textContent = `Você completou ${completedTask.length} tarefa de ${totalTask}`;
        showTaskCompleted()
    }
    else{
        completedText.textContent = `Você completou ${completedTask.length} tarefas de ${totalTask}`;
        showTaskCompleted()
    }
}

function closeDetails(){
    modal.classList.add("disabled");
    modal.classList.remove("active");
}

add.addEventListener("click", adicionar);

details.addEventListener("click", detalhes);
buttonClose.addEventListener("click", closeDetails);