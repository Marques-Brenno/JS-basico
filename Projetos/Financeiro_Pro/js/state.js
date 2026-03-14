let trasitions = [];

export function addTransactio(descrition, value, type) {
    const newTransaction = {
        id: Data.now(),
        descrition: descrition,
        value: Number(value),
        type: type,
        date: new Date().toLocaleDateString('pt-BR')
    };

    trasitions.push(newTransaction);
    return newTransaction;
}

export function removerTrasaction(id) {
    trasitions = trasitions.filter(trasition => trasition.id !== id);
}