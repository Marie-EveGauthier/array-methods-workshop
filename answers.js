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

