/**
The prime factors of 13195 are 5, 7, 13 and 29.
What is the largest prime factor of the number 600851475143 ?

This solution is not optimized for the number given. It will take a
very LONG time to run on that number, but it otherwise works.
**/

var subject = 13195;
var square = Math.round(Math.sqrt(subject));
var factors = [];
var largest = 0;

for(var i = 3; i < subject; i++) {
    if(i % 2 !== 0 && subject % i === 0) {
        factors.push(i);
    }
}

for(var i = 0; i < factors.length; i++) {
    for(var j = 1; j < factors.length; j++) {
        if(factors[j] % factors[i] === 0) {
            factors.pop(j);
        }
    }
}

console.log(square);
console.log("Factors of " + subject+ " are " + factors);

factors.sort(function(a, b){return a-b;});

console.log("Largest prime factor is " + factors[factors.length-1]);