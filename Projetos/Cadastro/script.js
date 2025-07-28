document.addEventListener("DOMContentLoaded", function() {
    const name = document.querySelector("#nome");
    const email = document.querySelector("#email");
    const passWord = document.querySelector("#senha");
    const view = document.querySelector("#view");
    const cadastrar = document.querySelector("#cadastrar");
    const input = document.querySelectorAll("input");

    function empty(e) {
        return e.value.replace(/\s/g, "") !== "" ? true : false;
    }

    function VeriEmail(e) {
        return e.value.includes("@") ? true : false;
    }

    view.addEventListener("click", function() {
        if (view.classList.contains("bx-eye-big")) {
            view.className = "bxr bx-eye-closed";
            passWord.type = "text";
        } else {
            view.className = "bxr bx-eye-big";
            passWord.type = "password";
        }
    });

    function VeriPassword(e) {
        let passWordValue = e.value;
        let passWordNivel = document.querySelector("#password-nivel");
        let passWordText = document.querySelector("#password-text");

        const nivel = ["Muito fraca", "Fraca", "Moderada", "Forte", "Muito Forte", "Extremamente Forte"];
        let ct = 0;

        if (passWordValue.length >= 8) ct++;
        if (passWordValue.match(/[a-z]/)) ct++;
        if (passWordValue.match(/[A-Z]/)) ct++;
        if (passWordValue.match(/[0-9]/)) ct++;
        if (passWordValue.match(/[^a-zA-Z0-9]/)) ct++;

        let width = (ct / 5) * 100;

        switch (ct) {
            case 1:
                passWordNivel.style.backgroundColor = "#e70b0b";
                break;
            case 2:
                passWordNivel.style.backgroundColor = "#FFB74D";
                break;
            case 3:
                passWordNivel.style.backgroundColor = "#FFF176";
                break;
            case 4:
                passWordNivel.style.backgroundColor = "#81C784";
                break;
            case 5:
                passWordNivel.style.backgroundColor = "#468649ff";
                break;
            default:
                passWordNivel.style.backgroundColor = "transparent";
        }

        passWordNivel.style.width = `${width}%`;

        if (passWordValue.length > 0) {
            passWordText.textContent = `Senha ${nivel[ct]}`;
        } else {
            passWordText.textContent = "";
        }

        return ct >= 2; // Retorna true se a senha for considerada válida
    }

    passWord.addEventListener("input", () => VeriPassword(passWord));

    input.forEach(inp => {
        inp.addEventListener("input", function () {
            console.log("Verificando condições...");
            console.log("Nome vazio:", empty(name));
            console.log("Email válido:", VeriEmail(email));
            console.log("Senha válida:", VeriPassword(passWord));

            if (
                empty(name) &&
                VeriEmail(email) &&
                VeriPassword(passWord)
            ) {
                cadastrar.classList.remove("off");
                cadastrar.classList.add("on");
                cadastrar.disabled = false;
            } else {
                cadastrar.classList.remove("on");
                cadastrar.classList.add("off");
                cadastrar.disabled = true;
            }

        });
    });
});
