const input = document.getElementById("valor");

input.addEventListener("input", function () {
    let value = this.value;

    // Remove tudo que não for número
    value = value.replace(/\D/g, "");

    // Se estiver vazio, mostra 0
    if (value === "") {
        this.value = "0,00";
        return;
    }

    // Converte para formato com centavos
    value = (parseInt(value) / 100).toFixed(2);

    // Troca ponto por vírgula
    value = value.replace(".", ",");

    this.value = value;
});