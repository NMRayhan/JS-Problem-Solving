/*
2! = 1X2
3! = (3-1)!X3
4! = (4-1)!X4
5! = (5-1)!X5
5! = 1X2X3X4X5
6! = (6-1)!X6
n! = (n-1)!Xn
*/
var n = 5;
let fact = 1
for(var i=1; i<=n; i++){
   fact = i*fact
}
console.log(fact);