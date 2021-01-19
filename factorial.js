/*
2! = 1X2
3! = (3-1)!X3
4! = (4-1)!X4
5! = (5-1)!X5
6! = (6-1)!X6
n! = (n-1)!Xn
*/

let n = 1;
function fact(num) {
    for (let i = 1; i <= num; i++) {
        n = i * n;
    }
    return n;
}
console.log(fact(5));