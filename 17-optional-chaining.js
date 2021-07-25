// BAD

const street = person && person.address && person.address.street;


//  GOOD


const steet = person?.address?.street;

// if the person is not there it will be undefined

