// BAD

let quantity = parseInt('453');
let total = parseFloat('42.6');

console.log(quantity, total);



//  GOOD

let quantity = +'453';
let total = +'42.6';

console.log(quantity, total);