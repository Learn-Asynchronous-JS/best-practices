// BAD

function add(num1, num2) {  
    return num1 + num2;
}

console.log(add(2,2));



//  GOOD

const add = (num1, num2) =>  num1 + num2;

console.log(add(2,2));
