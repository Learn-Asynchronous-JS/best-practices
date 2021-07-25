// BAD

const firstName = 'Asitha', lastName = 'Bandara';
const greeting = 'Hello ' + firstName + ' ' + lastName;
console.log(greeting);


// GOOD

const firstName = 'Asitha', lastName = 'Bandara';
const greeting = `Hello ${firstName} ${lastName}`;
console.log(greeting);