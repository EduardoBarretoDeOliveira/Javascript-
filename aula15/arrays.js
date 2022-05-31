let num = [5,8,2,9,3]
console.log(`A lista é ${num}`)
num.push(7)
console.log(`A lista é ${num}`)
num.sort()
console.log(`A lista ordenada é ${num}`)
console.log(`O tamanho da lista é ${num.length}`)
for(let pos in num){
    console.log(`A posição ${pos} é: ${num[pos]}`)
}
console.log(`A posição de 7 é ${num.indexOf(7)}`)