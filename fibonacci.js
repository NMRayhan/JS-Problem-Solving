/*
2 = (2-1)+(2-2)
3 = (3-1)+(3-2)
4 = (4-1)+(4-2)
*/

function fibonacci(n) {
    var n1 = 0;
    var n2 = 1;
    if (n == 0) {
        return n1;
    } else if (n == 1) {
        return n2;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}
var nTerm = 10;
for (var i = 0; i <= nTerm; i++) {
    console.log(fibonacci(i));
}