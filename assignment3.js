// 1st Problem: kilometer To Miter 
function kilometerToMeter(kilometer) {
    var meter = 1000; //1km equal to 1000 meter define
    return Math.abs(meter * kilometer);
}
console.log(kilometerToMeter(9));


//2nd Problem: budget Calculator
function budgetCalculator(watch, mobile, laptop) {
    var watchPrice = 50, mobilePrice = 100, laptopPrice = 500;
    if (watch < 0 || mobile < 0 || laptop < 0) {
        return "Please input Positive Number"
    } else {
        var watchTotal = watch * watchPrice;
        var mobileTotal = mobile * mobilePrice
        var laptopTotal = laptop * laptopPrice
        var totalbudget = watchTotal + mobileTotal + laptopTotal;
        return totalbudget;
    }
}
console.log(budgetCalculator(3, 4, 5));



//3rd Problem: hotel Cost Problem
function hotelCost(stayDay) {
    if (stayDay <= 10) {
        var firstPart = stayDay * 100;
        return Math.abs(firstPart)
    }
    else if (stayDay <= 20) {
        var firstPart = 10 * 100;
        var secondPart = stayDay - 10;
        var remaining = secondPart * 80;
        var totalCost = firstPart + remaining;
        return Math.abs(totalCost)
    }
    else {
        var firstPart = 10 * 100;
        var secondPart = 10 * 80;
        var remaining = stayDay - 20;
        var thirdPart = remaining * 50;
        return Math.abs(firstPart + secondPart + thirdPart);
    }
}
console.log(hotelCost(71)); //incase if we input negative number bt Math.abs() return positive



//4th Problem: mega Friend
function megaFriend(FriendNameList) {
    var megaFriendName = "";

    FriendNameList.forEach(function (char) {
        if (char.length > megaFriendName.length) {
            megaFriendName = char;
        }
    });

    return megaFriendName;
}

var friendName = ["Bablu", "Hablu", "Kabuilla", "abul mal abdul muhit", "moga alomgir", "sheikh hasina"]
var ans = megaFriend(friendName);
console.log(ans);