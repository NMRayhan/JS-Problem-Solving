function isPrime(n){
    for (var i = 2; i < n; i++) {
        if (n % i == 0) {
            return "not a Prime Number";
        }else{
            return "Prime Number";
        }
    }
}
console.log(isPrime(15));
