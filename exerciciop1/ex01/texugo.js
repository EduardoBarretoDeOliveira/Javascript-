data = new Date()
hora = data.getHours()
min = data.getMinutes()
horas = window.document.getElementById(`hora`)
horas.innerHTML = (`Agora são ${hora}:${min}`)
fundo = window.document.body.background-color
if(hora < 12){
    fundo.innerHTML = 
} else if(hora <19){

} else{
    
}
