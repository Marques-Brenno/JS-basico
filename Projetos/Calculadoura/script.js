let resul = document.querySelector("#res");
let buttons = document.querySelectorAll(".btn");
let Firstnum = null;
let Newnum = null;
let operador = null;

function update(Resultado) {
    resul.textContent = Resultado;
}

function add(element) {
    if (element === "," && resul.textContent.includes(",")) {
        return;
    }
    if (resul.textContent == "0") {
        resul.textContent = "";
    }
    if (resul.textContent !== "0" || element !== "0") {
        resul.textContent += element;
    }
}

function apaga() {
    resul.textContent = "0";
}

function porcent() {
    resul.textContent = (parseFloat(resul.textContent.replace(",", ".")) / 100).toString().replace(".", ",");
}

function sinal() {
    resul.textContent = Number(resul.textContent) * -1;
}

function ADDoperador(element) {
    if (resul.textContent) {
        calcular();
        Firstnum = parseFloat(resul.textContent.replace(",", "."));
        // Não chamar apaga() aqui para manter o resultado visível
        if(operador == null){
          apaga()

        }
    }
    operador = element;
}

function calcular() {
    if (operador === null || Firstnum === null) return null;

    let Secundnum = parseFloat(resul.textContent.replace(",", "."));
    let Resultado;

    switch (operador) {
        case "÷":
            if (Secundnum == 0) {
                alert("Não é possível dividir por zero");
                return;
            }
            Resultado = Firstnum / Secundnum;
            break;
        case "×":
            Resultado = Firstnum * Secundnum;
            break;
        case "-":
            Resultado = Firstnum - Secundnum;
            break;
        case "+":
            Resultado = Firstnum + Secundnum;
            break;
        default:
            return;
    }

    update(Resultado.toString().replace(".", ",")); // pra exibir com vírgula
    operador = null;
    Firstnum = null;
}

buttons.forEach(element => {
    element.addEventListener("click", function () {
        if (/^[0-9,]+$/.test(element.textContent)) {
            add(element.textContent);
        } else {
            switch (element.textContent) {
                case "C":
                    apaga();
                    break;
                case "%":
                    porcent();
                    break;
                case "=":
                    calcular();
                    break;
                case "±":
                    sinal();
                    break;
                case ",":
                    add(element.textContent);
                    break;
                case "÷":
                case "×":
                case "-":
                case "+":
                    ADDoperador(element.textContent);
                    break;
                default:
            }
        }
    });
});
