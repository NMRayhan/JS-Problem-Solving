function stringRevers(str){
    var spliteStr = str.split('')
    console.log(spliteStr);
    var reversArray = spliteStr.reverse();
    console.log(reversArray);
    var joinArray = reversArray.join('');
    console.log(joinArray);
    return joinArray
}

console.log(stringRevers("hello"));
