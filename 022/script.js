let num = document.getElementById('num')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []

function isNumero(n)
{
    if (Number(n) >= 1 && Number(n) <= 100)
    {
        return true
    }
    else 
    {
        return false
    }
}

function inLista(n,l)
{
    
    if (l.indexOf(Number(n)) != -1)
    {
        return true
    }
    else
    {
        return false
    }
}

function adicionar()
{
    if (isNumero(num.value) && !inLista(num.value, valores))
    {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `valor ${num.value} adicionado`
        lista.appendChild(item)
    }
    else
    {
        alert('valor invalido ou ja adicionado')
    }
    num.value = ''
    num.focus()
}

function finalizar()
{
    if (valores.length == 0)
    {
        alert('Adicione valores antes de finalizar')
    }
    else
    {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        valores.forEach(function(posicao) {
            soma += Number(posicao)

            if (posicao > maior)
            {
                maior = posicao
            }
            if (posicao < menor)
            {
                menor = posicao
            }
        })
        
        media = soma / total

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${total} numeros cadastrados</p>`
        res.innerHTML += `<p>O maior valor informado é ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado é ${menor}</p>`
        res.innerHTML += `<p>A soma dos numeros é ${soma}</p>`
        res.innerHTML += `<p>A média dos numeros é ${media}</p>`
    }
}