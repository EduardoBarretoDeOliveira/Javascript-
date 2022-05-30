let num = [5,8,2,9,3]
console.log(`A lista é ${num}`)
num.push(7)
console.log(`A lista é ${num}`)
num.sort()
console.log(`A lista ordenada é ${num}`)
console.log(`O tamanho da lista é ${num.length}`)
c = 0
while(c < num.length){
    console.log(`A posição ${c} é ${num[c]}`)
}