// BAD

// immutabilit, in this example users ariable is being mutated

const addUser = (users, user) => {
    users.push(user);
}

//  GOOD

const addUser = (users, user) => {
    return [...users , user];
}

//  ... -> spread operator