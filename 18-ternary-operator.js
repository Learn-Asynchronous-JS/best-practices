// BAD

let number = 10;

let result;

if(number < 0) {
    result = 'Negative'
} else {
    result = 'Positive'
}

console.log(result);



//  GOOD

let number = 10;

let result = result > 0 ? 'Negatie' : 'Positive';

console.log(result);
