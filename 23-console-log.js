const foo = {name: 'asitha', location: 'kadwatha', email: 'asitha@stc.com' }
const bar = {name: 'sithum', location: 'ratnapura', email: 'sithum@stc.com' }
const baz = {name: 'roshan', location: 'kottawa', email: 'roshan@stc.com' }

// to debug the application

//  console.log

console.log(foo, bar, baz)

// print data with it's na,e
console.log({foo, bar, baz})  // computer property name

// Add css to log
console.log('%c Highlight Data', 'color: orange; font-weight: bold');


// print data as a table
console.table([foo, bar, baz]);


// cheack the time

console.time('looper')

let i = 0;
while (i < 1000000) {
    i++;
}

console.timeEnd('looper')