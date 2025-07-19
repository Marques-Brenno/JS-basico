// Selecionando elementos do DOM
let add = document.querySelector("#add"); // Botão para adicionar tarefa
let newTask = document.querySelector("#new-task"); // Campo de entrada para nova tarefa
let contentTask = document.querySelector("#content-task"); // Container para as tarefas
let ct = 0; // Contador para identificar tarefas
let containerAlert = document.querySelector("#container-alert"); // Container para alertas
let details = document.querySelector("#ver-detalhes"); // Botão para ver detalhes das tarefas concluídas
let modal = document.querySelector("#modal"); // Modal para exibir detalhes
let buttonClose = document.querySelector("#close"); // Botão para fechar o modal
let completedText = document.querySelector("#completed-text"); // Texto que exibe o número de tarefas concluídas
let contentTaskCompleted = document.querySelector("#content-task-completed"); // Container para tarefas concluídas

// Função para adicionar uma nova tarefa
function adicionar(){
    // Verifica se o campo de entrada não está vazio
    if(newTask.value.trim().replace(/\s+/g, ' ') != ""){
        let task = document.createElement("div"); // Cria um novo elemento div para a tarefa
        task.className = 'task'; // Adiciona a classe 'task' à nova div

        // Criação do checkbox para a tarefa
        let inputCheck = document.createElement("input");
        let labelCheck = document.createElement("label");
        inputCheck.type = "checkbox";        
        inputCheck.name = "check";        
        inputCheck.id = `check${ct}`; // ID único para cada checkbox
        inputCheck.hidden = true; // Esconde o checkbox

        labelCheck.className = "check"; // Adiciona a classe 'check' ao rótulo
        labelCheck.htmlFor = `check${ct}`; // Associa o rótulo ao checkbox

        let newHr = document.createElement("hr"); // Cria uma linha horizontal para riscar a tarefa
        newHr.className = "risco"; // Adiciona a classe 'risco'
        
        // Criação do campo de texto para a tarefa
        let inputText = document.createElement("input");
        inputText.type = "text";        
        inputText.className = "input-task"; // Adiciona a classe 'input-task'
        inputText.value = newTask.value; // Define o valor do campo como o texto da nova tarefa
        inputText.disabled = true; // Desabilita o campo de texto

        let divButtons = document.createElement("div"); // Cria um container para os botões
        divButtons.className = "butons"; // Adiciona a classe 'butons'

        // Criação dos botões de editar e excluir
        let buttonEdt = document.createElement("button");
        let buttonExc = document.createElement("button");
        buttonEdt.className = "btn edt"; // Adiciona a classe 'btn edt' ao botão de editar
        buttonEdt.textContent = "Editar"; // Define o texto do botão de editar
        buttonExc.className = "btn exc"; // Adiciona a classe 'btn exc' ao botão de excluir
        buttonExc.textContent = "Excluir"; // Define o texto do botão de excluir

        // Adiciona a nova tarefa ao container de tarefas
        contentTask.appendChild(task);
        task.appendChild(inputCheck);
        task.appendChild(labelCheck);
        task.appendChild(newHr);
        task.appendChild(inputText);
        task.appendChild(divButtons);

        // Adiciona os botões ao container de botões
        divButtons.appendChild(buttonEdt);
        divButtons.appendChild(buttonExc);

        // Evento para o botão de editar
        buttonEdt.addEventListener("click", function(){
            if(buttonEdt.classList.contains("edt")){ // Se o botão for de editar
                inputText.disabled = false; // Habilita o campo de texto
                inputText.classList.remove('normal'); // Remove a classe 'normal'
                inputText.classList.add('hover'); // Adiciona a classe 'hover'
                buttonEdt.classList.remove('edt'); // Troca a classe para 'save'
                buttonEdt.classList.add('save');
                buttonEdt.textContent = "Salvar"; // Altera o texto do botão para "Salvar"
            }
            else{ // Se o botão for de salvar
                inputText.disabled = true; // Desabilita o campo de texto
                inputText.classList.remove('hover'); // Remove a classe 'hover'
                inputText.classList.add('normal'); // Adiciona a classe 'normal'
                buttonEdt.classList.remove('save'); // Troca a classe para 'edt'
                buttonEdt.classList.add('edt');
                buttonEdt.textContent = "Editar"; // Altera o texto do botão para "Editar"
            }
        });

        // Evento para o botão de excluir
        buttonExc.addEventListener("click", function(){
            task.remove(); // Remove a tarefa do DOM
        });

        // Limpa o campo de entrada após adicionar a tarefa
        newTask.value = "";
        ct++; // Incrementa o contador de tarefas
    }
    else{ // Se o campo de entrada estiver vazio
        // Criação de um alerta informando que a tarefa não pode ser vazia
        let divAlert = document.createElement("div");
        divAlert.className = "alert"; // Adiciona a classe 'alert'
        divAlert.style.marginLeft = "100%"; // Posiciona o alerta fora da tela
        
        let div = document.createElement("div");

        let alertIcon = document.createElement("div");
        alertIcon.className = "alert-icon"; // Adiciona a classe 'alert-icon'

        let alertCircle = document.createElement("div");
        alertCircle.className = "alert-circle"; // Adiciona a classe 'alert-circle'

        let icon = document.createElement("i") // Criação do ícone de alerta
        icon.className = "fa-solid fa-exclamation"; // Classe do ícone de exclamacão

        let alertText = document.createElement("div");
        alertText.className = "alert-text"; // Adiciona a classe 'alert-text'
        alertText.textContent = "Você não pode adicionar uma tarefa vazia"; // Mensagem de alerta

        let alertTime = document.createElement("div");
        alertTime.className = "alert-time"; // Adiciona a classe 'alert-time'

        // Adiciona o alerta ao container de alertas
        containerAlert.appendChild(divAlert);
        divAlert.appendChild(div);
        div.appendChild(alertIcon);
        alertIcon.appendChild(alertCircle);
        alertCircle.appendChild(icon);
        div.appendChild(alertText);
        divAlert.appendChild(alertTime);
        
        // Define um tempo para a animação de desaparecimento do alerta
        setTimeout(function(){
            divAlert.style.animation = "forwards .5s diminui"; // Animação de diminuição
        },4500);

        // Remove o alerta após 5 segundos
        setTimeout(function(){
            divAlert.remove();
        },5000);
    }
}

// Função para mostrar as tarefas concluídas
function showTaskCompleted(){
    let numtask = document.querySelectorAll('input[type="checkbox"]'); // Seleciona todos os checkboxes
    let inputTask = document.querySelectorAll(".input-task"); // Seleciona todos os campos de texto das tarefas
    numtask.forEach((e,index) => {
        let newDiv = document.createElement("div"); // Cria um novo elemento div para a tarefa concluída
        newDiv.className = "task-completed"; // Adiciona a classe 'task-completed'
        newDiv.textContent = inputTask[index].value; // Define o texto como o valor da tarefa
        contentTaskCompleted.appendChild(newDiv); // Adiciona a tarefa concluída ao container
    });
}

// Função para exibir detalhes das tarefas concluídas
function detalhes(){
    contentTaskCompleted.innerHTML = ""; // Limpa o container de tarefas concluídas

    let completedTask = document.querySelectorAll('input[type="checkbox"]:checked'); // Seleciona as tarefas concluídas
    let totalTask = document.querySelectorAll('input[type="checkbox"]').length; // Total de tarefas
    modal.classList.remove("disabled"); // Remove a classe 'disabled' do modal
    modal.classList.add("active"); // Adiciona a classe 'active' ao modal

    // Exibe mensagem dependendo do número de tarefas concluídas
    if(completedTask.length == 0){
        completedText.textContent = `Você ainda não completou nenhuma tarefa`; // Mensagem se nenhuma tarefa foi concluída
    }
    else if(completedTask.length == 1){
        completedText.textContent = `Você completou ${completedTask.length} tarefa de ${totalTask}`; // Mensagem se uma tarefa foi concluída
        showTaskCompleted(); // Chama a função para mostrar tarefas concluídas
    }
    else{
        completedText.textContent = `Você completou ${completedTask.length} tarefas de ${totalTask}`; // Mensagem se múltiplas tarefas foram concluídas
        showTaskCompleted(); // Chama a função para mostrar tarefas concluídas
    }
}

// Função para fechar o modal de detalhes
function closeDetails(){
    modal.classList.add("disabled"); // Adiciona a classe 'disabled' ao modal
    modal.classList.remove("active"); // Remove a classe 'active' do modal
}

// Adiciona eventos aos botões
add.addEventListener("click", adicionar); // Evento para adicionar tarefa
details.addEventListener("click", detalhes); // Evento para mostrar detalhes
buttonClose.addEventListener("click", closeDetails); // Evento para fechar o modal
