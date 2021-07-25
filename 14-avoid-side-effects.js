// BAD

let name = 'Asitha Bandara';  // string

function splitName() {
    name = name.split(' ');
}

splitName();  // converted into an array, not good


//  GOOD

let name = 'Asitha Bandara';
let nameSplit = splitName(name);

function splitName(name) {
    return name.split(' ');
}

splitName(); 