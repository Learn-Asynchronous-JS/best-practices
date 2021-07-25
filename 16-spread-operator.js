// BAD

const name = {
    firstName: 'Asitha',
    lastName: 'Bandara'
}

const hobbies = {
    videoGames: true,
    readingBooks: true,
    playOutside: true
}

const person =  {
    firstName: name.firstName,
    lastName: name.lastName,
    videoGames: hobbies.videoGames,
    readingbooks: hobbies.readingBooks
}


console.log(person);


//  Good

const person_good = {
    ...name,
    ...hobbies
}

console.log(person_good);