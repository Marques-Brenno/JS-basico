let amigo = {nome:'José',
sexo:'M',
peso:85.4,
engordar(p){
    console.log('Engordou')
    this.peso += p
}}
amigo.engordar(0)
console.log(amigo)