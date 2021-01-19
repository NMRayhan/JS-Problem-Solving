/*
2 = (2-1)+(2-2)
3 = (3-1)+(3-2)
4 = (4-1)+(4-2)
*/
let arr = [0,1], i = 2, n = 10;
while (i <= n) {
    arr[i] = arr[i - 1] + arr[i - 2]
    i++
}
console.log(arr);