let num = [5, 2, 21, 9]

/*
num.push(19)
num.sort()
console.log(num)
console.log(`qtd de posições ${num.length}`)
*/

/*
for (let posi = 0; posi < num.length; posi++) {
    console.log(`A posição ${posi} tem valor ${num[posi]}`)
    
}
*/
num.sort()
for (const posi in num) {
    console.log(`A posição ${posi} tem valor ${num[posi]}`)
}