function animalCount(depth) {
    if (depth <= 10) {
        animal = depth * 50;
        return animal
    } else if (depth <= 20) {
        firstPart = 10 * 50
        secondPart = depth - 10;
        remaining = secondPart * 100;
        total = firstPart + remaining
        return total
    } else {
        firstPart = 10 * 50;
        secondPart = 10 * 100;
        remaining = depth - 20;
        finalPart = remaining * 300;
        total = firstPart + secondPart + finalPart;
        return total
    }
}
console.log(animalCount(22));
