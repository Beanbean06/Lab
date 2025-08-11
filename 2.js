//p2

let numbers = [12, 45, 7, 23, 56, 10];
let largestNum = numbers[0];
for (let i = 1; i < numbers.length; i++) {
  if (largestNum < numbers[i]) {
    largestNum = numbers[i];
  }
}
console.log(largestNum);
