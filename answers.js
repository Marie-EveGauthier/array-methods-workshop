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
    arr.filter(function(element){
        if(element > 0){
            return element;
        }
    });
}

getPositives([-2, 2, 3, 4, -5, 0, -10]);