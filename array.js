var number = [1,2,3,4,5,3,45,3,2,7,67,3,22,3,3,13]
var duplicate = []

for(var i=0; i<number.length; i++){
    var element = number[i]
    var index = duplicate.indexOf(element)
    if(index == -1){
        duplicate.push(element)
    }
}
console.log(duplicate);