function stringRevers(str){
    var revers = ""
    for (let index = 0; index < str.length; index++) {
        var element = str[index];
        revers = element + revers;
    }
    return revers;
}

console.log(stringRevers("Nur Mohammad Rayhan"));
