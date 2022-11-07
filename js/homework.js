//==================Exercise #1 ==========//
/*
    Given the array [1, 2, 3, 5, 6, 7],  finds the index of the first non-consecutive element in the array.
    It should log out 3 because the array at index 3 is 5 which is not consecutive.
*/

check = [1,2,3,4,5,6]
let exerciseOneArr = [1, 2, 3, 5, 6, 7]
i=0

for (let a of exerciseOneArr){
    if (check[a] != exerciseOneArr[a]){
        console.log(exerciseOneArr[a])
    }
}


//============Exercise #2 ============//
/*
Given the two array of numbers below, loop through them both individually and the sum all of the positives elements.

Example 1:
Input: [10, 12, -9, 3, -1, 0, 15] 
Output: 40
Explain: 10 + 12 + 3 + 15 = 40

Example 2:
Input: [3, 5, 7, 9, -10, 2, -22, -1] 
Output: 26

Note: if there is nothing to sum, the sum is default to 0.
*/

let numbers1 = [10, 12, -9, 3, -1, 0, 15] 
let sum = 0

for (let n of numbers1){
    if (n>0){
        total = sum+=  n;
    }
    console.log(total);
};

let sum1 = 0

let numbers2 = [3, 5, 7, 9, -10, 2, -22, -1] 

for (let n of numbers2){
    if (n>0){
        total1 = sum1+=n;
    }
    console.log(total1);
}