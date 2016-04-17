/*Exercise 1 : A function called printPositives that 
takes an array and uses its forEach method to print only the positive numbers.
*/

function printPositives(arr) { 
    var result = [];
    arr.forEach(function(element) {    
        if(element > 0){
            result.push(element);
        }
    });
    console.log(result);
}

printPositives([-2, 2, 3, 4, -5, 0, -10]);


/*Exercise 2: A function called getPositives that takes an array 
and uses its filter method to return a new array with only the positive numbers
*/

function getPositives(arr) {
    return arr.filter(function(element){
        if(element > 0){
            return element;
        }
    });
}
console.log(getPositives([-2, 2, 3, 4, -5, 0, -10]));

/*Exercise 3: A function called filterArray 
that takes an array AND a function as arguments. 
Your filter function should return a new array that contains only the elements where the passed function returns a truthy value.
*/

function filterArray (arr, foo) {
    return arr.filter(foo);
    }

console.log(filterArray([true, false, "true", "false", 0, -1, 1], 
function isEven(num){
    if(num % 2 === 0){
        return true;
    }
    else {
        return false;
    }
}
));

/* Exercise 4: A function called longestWord that takes a string as argument,
and returns the longest word in the string. You should use Array.prototype.reduce to do your work.
*/
function longestWord(str){
    var arrOfWord= str.split(" ");
    return arrOfWord.reduce(function(accumulator, currentValue) {
        if (currentValue.length > accumulator.length) {
            accumulator = currentValue;
        } 
        return accumulator;
    }, []);    
}


console.log(longestWord("Javasript est un outil merveilleux."));

/*Exercise 5: A function called countVowels that takes a string and returns the number of vowels in the string. 
You should use Array.prototype.reduce to do your work.
*/

function countVowels (str) {
    var arrOfLetters = str.split("");
    var arrOfVowels = ["a", "e", "i", "o", "u", "y"];
    return arrOfLetters.reduce(function(accumulator, currentValue){
        if(arrOfVowels.indexOf(currentValue) !== -1){
            accumulator += 1;
        }
        return accumulator;
    }, 0);
}

console.log(countVowels("allo"));

/* Exercise 6: a function called highLow that takes an array of numbers, 
and returns an object with a property highest containing the highest number, 
and a property lowest containing the lowest number, 
using Array.prototype.reduce.
*/

function highLow (arr) {
    return arr.reduce(function(accumulator, currentValue){
        if (accumulator.highest < currentValue){
            accumulator.highest = currentValue;
        }
 
        if (accumulator.lowest > currentValue){
            accumulator.lowest = currentValue;
        }
        return accumulator;
        
    }, {highest: -Infinity, lowest: Infinity});
}

console.log(highLow([-100, 76, -55, 0, 34, 23, 1]));

/* Exercise 7: a function called highLowTwo that takes an array of numbers, 
and returns the higest, second highest, lowest, and second lowest numbers.
*/
function highLowTwo (arr) {
    return arr.reduce(function(accumulator, currentValue) {
        if (accumulator.secondHighest < currentValue) {
            if (accumulator.highest < currentValue) {
                accumulator.highest = currentValue;
            }
            else {
                accumulator.secondHighest = currentValue;
            }
        }
        if (accumulator.secondLowest > currentValue) {
            if (accumulator.lowest > currentValue) {
                accumulator.lowest = currentValue;
            }
            else {
               accumulator.secondLowest = currentValue; 
            }
        }
        return accumulator;
        
    }, {highest: -Infinity, secondHighest: -Infinity,  lowest: Infinity, secondLowest: Infinity });
}

console.log(highLowTwo([-100, 76, -55, 76, 34, 23, 1]));

/* Exercise 8: Write a function called countChars that takes a string, 
and returns an object where the keys are letters, and the value is the number of times that letter appears.
*/

function countChars(str) {
//Transform the string in a array of unique letters    
    var arrOfLetters = str.replace(/\s/gi, "").toLowerCase().split("");
    var arrOfUniqueLetter = []; 
    arrOfLetters.forEach(function(letter) {
        if (arrOfUniqueLetter.indexOf(letter) === -1) {
           arrOfUniqueLetter.push(letter);
        }
    });
//Reduce the new arrOfUniqueLetter into an object where the keys are the letter and the value is the number of times that letter appears
    var initialValue = {};
    var reducer = function (accumulator, uniqueLetter) {
        if(!accumulator[uniqueLetter]) {
            accumulator[uniqueLetter] = 1;
        }
        else {
            accumulator[uniqueLetter] += 1;
        }
        return accumulator;
    };
    var result = arrOfLetters.reduce(reducer, initialValue);
    return result;
}

console.log(countChars("Javasript est merveilleux"));




// Exercise 9 : a function called peopleById that takes an array of people and returns an object where each person is keyed by their unique ID.

function peopleById (arrOfPeople) {
    var initialValue = {};
    var reducer = function(accumulator, person) {
        var id = person["id"];
        accumulator[id] = person;
        return accumulator;
    };

var result = arrOfPeople.reduce(reducer, initialValue);
return result;
}

console.log(peopleById([
  {
    "id": "KeXoYg92is",
    "firstName": "John",
    "lastName": "Smith",
    "email": "john@smith.com"
  },
  {
    "id": "NkALmSWtUp",
    "firstName": "Donald",
    "lastName": "Duck",
    "email": "don@disney.com"
  },
  {
    "id": "m7LPbJYSUg",
    "firstName": "John",
    "lastName": "Vader",
    "email": "vader@darkside.com"
  }
]));