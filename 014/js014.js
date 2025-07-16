function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    var sec = data.getSeconds()
    var mensa = document.getElementById('mensa')

    msg.innerHTML = `Agora são ${hora} horas ${min} min e ${sec} s`

    if (hora >= 0 & hora < 12) 
    {
        img.src = 'manha.png'  
        document.body.style.backgroundColor = '#9b7c6d'  
        mensa.innerHTML = 'Bom dia!!'
    } 
    
    else if (hora >= 12 & hora <= 18)
    {
        img.src = 'tarde.png'
        document.body.style.backgroundColor = '#e14c02b2'
        mensa.innerHTML = 'Boa tarde!!'  
    }

    else
    {
        img.src = 'noite.png'
        document.body.style.backgroundColor = '#002d66'  
        mensa.innerHTML = 'Boa noite!!'
    }
}