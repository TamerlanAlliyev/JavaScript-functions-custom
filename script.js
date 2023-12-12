
// Task_1           Pop Custom
function customPop(arr) {
  
    arr[arr.length - 1] = undefined; 
    arr.length = arr.length - 1; 
  
    return arr; 
  }
  
  const fruits = ["apple", "orange", "banana", "cherry", "pear"];
  console.log(fruits);
  
  const modifiedFruits = customPop(fruits); 
  console.log(modifiedFruits); 



/*
// ************************************* Task_2           Push Custom

function customPush(arr, value) {
    arr.length = arr.length + 1;
    arr[arr.length - 1] = value; 

    return arr;
}

const vegetable = ["Carrot ", "Tomato", "Broccoli", "Cucumber"];
console.log(vegetable);

const modifiedVegetable = customPush(vegetable, "Potato"); 
console.log(modifiedVegetable); 
*/



/*
// *************************************  3.Task         Shift custom
function customShift(arr) {
    const firstRemove = arr[0];

    for (let i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1]; 
    }

    arr.length = arr.length - 1;

    return firstRemove; 
}

const fruits = ["apple", "orange", "banana", "cherry", "pear"];
console.log(fruits);

const firstValueRemove = customShift(fruits);
console.log(firstValueRemove); 
console.log(fruits); 
*/


/*
// *************************************  4.Task         Unshift custom

function customUnshift(arr, firstAdd) {
    const newArray = [firstAdd, ...arr];

    for (let i = 0; i < newArray.length; i++) {
        arr[i] = newArray[i]; 
    }

    return arr.length; 
}

const actors = ["Tom", "Meryl", "Leonardo", "Emma", "Denzel"];
console.log(actors); 

const length = customUnshift(actors, "Bruce");
console.log(length);

console.log(actors); 
*/


/* *************************************  5.Task  At custom
function customAt(arr, index) {

    return arr[index];
}

const numberArray = [1, 2, 3, 4, 5];

console.log(customAt(numberArray, 2)); 
*/




/*
//  ************************************* 6.Task          Reverse custom

function customReverse(arr) {
    const reversedArray = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArray[reversedArray.length] = arr[i]; 
    }
    return reversedArray;
}

const numbers = [1, 2, 3, 4, 5];
console.log(numbers);

const reversed = customReverse(numbers);
console.log(reversed); 
*/



/*
// *************************************  7.Task           Reduce custom
function customReduce(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}

const numbers = [1, 2, 3, 4, 5]; 
console.log(numbers);

const total = customReduce(numbers);
console.log(total);
*/


/*
//  ************************************* 8.Task            Join custom
function customJoin(arr, separator = ',') {
    let comma = '';

    for (let i = 0; i < arr.length; i++) {
        comma += arr[i];

        if (i !== arr.length - 1) {
            comma += separator; 
        }
    }

    return comma;
}

const name = ['John', 'Emily', 'William', 'Sophia','Daniel'];

const comma = customJoin(name, ', ');

console.log(comma);
*/


/*
// *************************************  9.Task          includes custom
function numbers(arr, value, startIndex = 0) {
    for (let i = startIndex; i < arr.length; i++) {
        if (arr[i] === value) {
            return true;
        }
    }
    return false;
}

let num = [10, 20, 30, 40, 50];
//true
console.log(numbers(num, 30));
//false
console.log(numbers(num, 70)); 
*/

