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