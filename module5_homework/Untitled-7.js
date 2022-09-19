let arr = [4, '8', 16, 32, undefined, null, 's', 1];
let countEven = 0;
let countOdd = 0;
let countOther = 0;

for (let i = 0; i < arr.length; i++){
    if ((arr[i] === 0) || (typeof(arr[i]) != 'number')) {
        countOther++;
    } else {
        if (arr[i] % 2 === 0) {
            countEven++;
        } else {
            countOdd++;
        }
    }
}

console.log("Even " + countEven + " elements");
console.log("Odd " + countOdd + " elements");
console.log("Other " + countOther + " elements");
