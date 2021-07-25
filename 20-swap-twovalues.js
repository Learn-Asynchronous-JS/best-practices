// BAD

let [a,b] = [10,20];

const temp = a;
a = b;
b = temp;

console.log(a,b);



//  GOOD

let [a,b] = [10,20];

[a,b] = [b,a]

console.log(a,b);
