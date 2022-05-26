function load(){    
    data = new Date()
    var imga = window.document.getElementById(`imagem`)
    hora = data.getHours()
    min = data.getMinutes()
    horas = window.document.getElementById(`hora`)
    horas.innerHTML = (`Agora são ${hora}:${min}`)
    if (hora > 5 && hora <13) {
        imga.src = 'midias/dia.jpg'
        document.body.style.background = '#f9de77'
    } else if (hora < 19 && hora >13) {
        imga.src = 'midias/tarde.jpg'
        document.body.style.background = '#d85106'
    } else {
        imga.src = 'midias/noite.jpg'
        document.body.style.background = '#4e3f5c'
    }
}
