function ver(){
    data = new Date()
    anod = data.getFullYear()
    anop = document.getElementById(`ano`)
    res = document.getElementById(`res`)
    if (anop.value.length == 0){
        window.alert(`verifique os dados`)
    } else{
        sexp = document.getElementsByName(`radsex`)
        var idade = anod - Number(anop.value)
        res. innerHTML = `idade calculada: ${idade}`
    }
}