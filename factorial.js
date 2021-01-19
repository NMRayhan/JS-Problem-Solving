/*
2! = 1X2
3! = (3-1)!X3
4! = (4-1)!X4
5! = (5-1)!X5
6! = (6-1)!X6
n! = (n-1)!Xn
*/

function factorila(range){
    var start = 1,fact=1;
    while(start <= range){
        fact = fact * start;
        start++;
    }
    return fact;
}
console.log(factorila(5));
