let add = document.querySelector("#add");
let newTask = document.querySelector("#new-task");
let contentTask = document.querySelector("#content-task");
ct = 0;
let containerAlert = document.querySelector("#container-alert");

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
                inputText.style.border = "2px solid rgb(66, 66, 223)";
                buttonEdt.classList.remove('edt');
                buttonEdt.classList.add('save');
                buttonEdt.textContent = "Salvar";
            }
            else{
                inputText.disabled = true;
                inputText.style.border = "1px solid rgba(128, 128, 128, 0.458)";
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
        div.appendChild(alertIcon)
        alertIcon.appendChild(alertCircle)
        alertCircle.appendChild(icon)
        div.appendChild(alertText)
        divAlert.appendChild(alertTime)
        
        setTimeout(function(){
            divAlert.style.animation = "forwards .5s diminui"
        },4500);

    }
}

add.addEventListener("click", adicionar);