// BAD

let colorSheme;

let scheme = getColorScheme();

if(scheme) {
    colorSheme = scheme
} else {
    colorSheme = 'dark'
}



//  GOOD

let colorSheme = getColorScheme() || 'dark';