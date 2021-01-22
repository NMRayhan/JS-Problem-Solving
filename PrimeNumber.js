var mark=[55,89,87,67,45,90,70,77]
var markMax = mark[0]
for(var count=0; count<mark.length; count++){
    var element = mark[count];
    if(element > markMax){
        markMax = element;
    }
}
console.log("Most Maximum Mark is ",markMax);