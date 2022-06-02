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

    }
}