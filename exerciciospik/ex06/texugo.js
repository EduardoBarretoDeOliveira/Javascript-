function add(){
    let list = []
    let num = document.getElementById('txtn')
    if (num.value.length == 0 || num.value>100 || num.value <1){
        window.alert("preencha o campo corretamente para adicionar algum número")
    }else{
        let n = 0
        n = Number(num.value)
        list.push(n)
        let tabela = document.getElementById('tab')
        let item = document.createElement('option')
        item.text = `--${n}--`
        tabela.appendChild(item)
        return list
    }
    return list
}
function verif(){
    let tabela = document.getElementById('tab')
    let res = document.getElementById('res')
    list = [5,2,1,3,4]
    list.sort()
    let s = 0
    for(let c = 0; c < list.length; c++){
        s += list[c]
    }
    res.innerHTML += ` <br/>O maior número adicionado foi ${list[list.length-1]} <br/>`
    res.innerHTML += `<br/>O menor número adicionado foi ${list[0]}<br/>`
    res.innerHTML += `<br/>A soma de todos os valores é: ${s} <br/>`
    res.innerHTML += `<br/>A média dos valores digitado é: ${s / list.length}<br/>`
    res.innerHTML += tabela
}