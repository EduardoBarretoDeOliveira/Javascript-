function fat(n=0){
    if(n == 1){
        return 1
    }else{
        return n * fat(n-1)
    }
}
console.log(fat(5))