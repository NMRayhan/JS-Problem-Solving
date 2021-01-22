function animalCount(depth) {
    if (depth <= 10) {
        animal = depth * 100;
        return animal
    } 
    else if (depth <= 20) {
        firstPart = 10 * 100
        secondPart = depth - 10;
        remaining = secondPart * 80;
        total = firstPart + remaining
        return total
    } 
    else {
        firstPart = 10 * 100;
        secondPart = 10 * 80;
        remaining = depth - 20;
        finalPart = remaining * 50;
        total = firstPart + secondPart + finalPart;
        return total
    }
}
console.log(animalCount(11));
