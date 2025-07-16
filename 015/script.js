function calcular() {
    var data = new Date()
    var ano = data.getFullYear()
    var nas = document.getElementById('nas')
    var res = document.getElementById('res')

    if (nas.value.length == 0 || nas.value > ano)
    {
        alert('Dados incorretos, ou não adicionados')
    }
    else
    {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(nas.value)
        var gene = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked)
        {
            gene = 'Homem'
            if (idade >= 0 & idade < 10)
            {
                img.setAttribute('src', 'img/pequeno.png')
            }
            else if (idade < 21)
            {
                img.setAttribute('src', 'img/jovem_h.png')
            }
            else if (idade < 51)
            {
                img.setAttribute('src', 'img/homem.png')
            }
            else 
            {
                img.setAttribute('src', 'img/velho.png')
            }
        }
        else if (fsex[1].checked)
        {
            gene = 'Mulher'
            if (idade >= 0 & idade < 10)
            {
                img.setAttribute('src', 'img/pequena.png')
            }
            else if (idade < 21)
            {
                img.setAttribute('src', 'img/jovem_m.png')
            }
            else if (idade < 51)
            {
                img.setAttribute('src', 'img/mulher.png')
            }
            else 
            {
                img.setAttribute('src', 'img/velha.png')
            }
            
        }

        res.style.textAlign = 'center'
        res.innerHTML = `<p>${gene} com ${idade} anos</p>`
        res.appendChild(img)
    }
}