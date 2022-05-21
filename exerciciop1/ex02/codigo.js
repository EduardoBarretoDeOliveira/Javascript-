function ver(){
    var data = new Date()
    var anod = data.getFullYear()
    var anop = document.getElementById(`ano`)
    var res = document.getElementById(`res`)
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (anop.value.length == 0){
        window.alert(`verifique os dados`)
    } else{
        var sexp = document.getElementsByName(`radsex`)
        var idade = anod - Number(anop.value)
        var genero = ''
        if (sexp[0].checked){
            genero = 'Homem'
            if(idade< 11){
                img.setAttribute('src', 'midias/bebe-homem.jpg')
            }else if(idade < 19){
                img.setAttribute('src', 'midias/jovem-homem.jpg')
            }else if(idade <60){
                img.setAttribute('src', 'midias/homem-maduro.jpg')
            }else{
                img.setAttribute('src', 'midias/homem-idoso.jpg')
            }
        } else{
            genero = 'Mulher'
            if(idade< 11){
                img.setAttribute('src', 'midias/bebe-mulher.jpg')
            }else if(idade < 25){
                img.setAttribute('src', 'midias/jovem-mulher.jpg')
            }else if(idade <60){
                img.setAttribute('src', 'midias/mulher-madura.jpg')
            }else{
                img.setAttribute('src', 'midias/mulher-idosa.jpg')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos <br/>`
        res.appendChild(img)
    }
}