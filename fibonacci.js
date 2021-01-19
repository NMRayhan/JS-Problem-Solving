/*
ewnfpwo
*/

var arr=[0,1];
var n = 10;
for(var i=2; i<=n; i++){
    arr[i] = arr[i-1] + arr[i-2];
}
console.log(arr);
