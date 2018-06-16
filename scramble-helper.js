// Create a function that reverses a word
function reverseWord(word){
    let chars = word.split('');
    for (let i = 0, j = word.length; i < Math.floor(word.length)/2 && j >= Math.floor(word.length)/2; i+=1, j-=1) {
        [chars[i], chars[j]] = [chars[j], chars[i]];
    }
    return chars.join('');
}

// Create a function that takes an array of words and returns a new array of the
 // words with each word reversed.
function reverseEachWord(arr){
    // let result = [];
    // for (let word of arr){
    //     result.push(reverseWord(word));
    // }
    // return result;
    return arr.map(reverseWord);
}


// Create a function that returns a random word from an array
function randomWord(arr){
    let index = Math.floor(Math.random() * arr.length);
    return arr[index];
}

// Create an array of words and save it to a variable. Using your functions create
// a second array of reversed words.
let fruits = ['apple', 'berry', 'cherry'];
let reversedFruits = reverseEachWord(fruits);

// We could use the two arrays we've created to select a random word to show the user
// and check their guess. How could we do that? Is there a better way?

function selectRandom(arr1, arr2){
    let arr = arr1.concat(arr2);
    return randomWord(arr);
}

// ////////////////////////////////////////////////////////////////////////////

// Create a function that takes an array of words and returns a map with the keys
// as the reversed word and the values as the original word.

function mapReverse(arr){
    let map = new Map();
    for (let word of arr) {
        // console.log(word);
        map.set(reverseWord(word), word);
    }
    return map;
}

let mapReversed = mapReverse(fruits);

// Create a function that takes two strings, `guess` and `word` and a map, like
// the one you created above. If the first string is in the map, return the word
// if not, console log "Sorry, incorrect. The word was ..." and include word.
function guess(guess, word, map){
    if (map.has(guess)){
        return word;
    } else{
        console.log(`Sorry, incorrect. The word was ${word}`);
    }
}

console.log(guess('apple', 'apple', mapReversed));
// ////////////////////////////////////////////////////////////////////////////
// FURTHER STUDY

// Create a function that scrambles a word. Use whatever method you like to
// rearrange the letters.



// Create a function that takes an array of words and returns a map with the
// scrambled words as the keys and the original word as the values.
