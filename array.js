var speech = "I am hardworking. I am serious. I am sure I will do it"
var whiteSpace = 0,charecter=0;
for(var count=0; count<speech.length; count++){
    var char = speech[count]
    if(char == " "){
        whiteSpace++;
    }else{
        charecter++;
    }
}
var result = charecter - whiteSpace;
console.log(result);
console.log(speech.length);
console.log(whiteSpace);
console.log(charecter);