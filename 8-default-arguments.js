// BAD

function favoriteColor(color) {
    let selectedColor = color || "blue";
    // ...
    return selectedColor;
}

console.log(favoriteColor('red')); 



// GOOD

function favoriteColor(color = 'blue') {
    // ...
    return color;
}

console.log(favoriteColor('red')); 


