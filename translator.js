const languageCode = 'es'; // change this to 'fr', 'de', 'en', etc. to test.
let greeting; // we will assign this in the logic block

if (languageCode === 'es') {
    greeting = 'Hola, Mundo';
} else if (languageCode === 'fr') {
    greeting = 'Bonjour, le monde';
} else if (languageCode === 'de') {
    greeting = 'Hallo, Welt';
} else{
    // A default case for any other language,including English
    greeting = 'Hello, World';
}

console.log(greeting);