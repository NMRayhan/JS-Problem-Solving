
/*
2 = (2-1)+(2-2)
3 = (3-1)+(3-2)
4 = (4-1)+(4-2)
*/
function fibonacciIter(num){
    var fibo=[0,1]
    for(var i=2; i<num; i++){
        var nextIter = fibo[i-1] + fibo[i-2]
        fibo.push(nextIter);
    }
    return fibo;
}

console.log(fibonacciIter(10));

function fibonacciRecursive(num){
    if(num==0){
        return [0];
    }
    else if(num == 1){
        return [0,1];
    }else{
        var fibo = fibonacciRecursive(num-1)
        var nextFibo = fibo[num-1]+fibo[num-2]
        fibo.push(nextFibo);
        return fibo;
    }
}

console.log(fibonacciRecursive(7));
// for(var i=0; i<num; i++){

// }
// var result = fibonacciRecursive(10);
// console.log(result);