var agora = new Date()
var hora = agora.getHours()
var minutos = agora.getMinutes()
var segundos = agora.getSeconds()

console.log(`agr são exatamente ${hora}h ${minutos}min e ${segundos}s`)

if (hora == 0 || hora <= 4)
{
    console.log('Boa madrugada')
}

else if (hora < 12)
{
    console.log('bom dia')
} 

else if (hora <= 18)
{
    console.log('Boa tarde')
}

else
[
    console.log('boa noite')
]