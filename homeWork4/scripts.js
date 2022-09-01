
// Task 1

function sumOffDigits (n) {
    if (n < 10){
        return n;
    }else{
        return (n % 10) + sumOffDigits(Math.floor(n / 10)); 
    };
};

console.log(sumOffDigits(1312));

// Task 3

function sumOfNumbers(a, b, c, d, e, f) {
    return a + b + c + d + e + f;
}

let result = sumOfNumbers.apply(null, [1, 3, 4, 5, 2, 0]);

console.log(result);


// Task 4

function checkEven(num){
    if(num == 0){
        return "true"
    }else if(num == 1){
        return false
    }else{
        return checkEven(num - 2)
    };
};

console.log(checkEven(10000));