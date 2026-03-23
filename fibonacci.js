function fibs(n){
    const arr = [0,1]
    if(n < 2) return arr[0,n]
    for(let i = 2; i < n; i++){
        arr.push(arr[i-2] + arr[i-1]);
    }
    return arr;
}

function fibsRec(n){
    if(n === 1) return 0;
    if(n === 2) return 1;
    return fibsRec(n - 2) + fibsRec(n-1);
}

for (let index = 1; index <= 8; index++) {    
    console.log(fibsRec(index));
}