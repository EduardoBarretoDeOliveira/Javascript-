function contar(){
    var ini = window.document.getElementById('inicio')
    var fim = window.document.getElementById('fim')
    var passo = window.document.getElementById('intervalo')
    var result = document.getElementById('resultado')
    if ( ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert(`[ERRO] algo de errado com os dados, tente novamente`)
    }else{
        result.innerHTML = `Contando... <br>`
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (i > f){
            for(var c = i; c >= f;  c -= p){
                if(c - p < f){
                    result.innerHTML += `${c} 🏁`
                result.innerHTML += `Fim!`
                }else{
                    result.innerHTML += ` ${c} 👉` 
                }
        }
    }
        for(var c = i; c <= f;  c += p){
            if(c + p > f){
                result.innerHTML += ` ${c} 🏁`
                result.innerHTML += `Fim!` 
            }else{result.innerHTML += `${c} 👉`
        }
            
        }
}}

