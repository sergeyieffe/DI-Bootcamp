// const numbers = [5,0,9,1,7,4,2,6,3,8];
// Using the .toString() method convert the array to a string.
// Using the .join()method convert the array to a string. Try passing different values into the join.
// Eg .join(“+”), .join(” “), .join(“”)
// Bonus : To do this Bonus look up how to work with nested for loops
// Sort the numbers array in descending order, do so using for loops (Not using built-in sort methods).
// The output should be: [9,8,7,6,5,4,3,2,1,0]
// Hint: The algorithm is called “Bubble Sort”
// Use a temporary variable to swap values in the array.
// Use 2 “nested” for loops (Nested means one inside the other).
// Add comments and console.log the result for each step, this will help you understand.
// Requirement: Don’t copy paste solutions from Google


const numbers = [5, 0, 9, 1, 7, 4, 2, 6, 3, 8];


const NumsToString = numbers.toString();
console.log(".toString():", NumsToString);

const JoinComma = numbers.join(",");
console.log(".join(','):", JoinComma);

const JoinPlus = numbers.join("+");
console.log(".join('+'):", JoinPlus);

const JoinSpace = numbers.join(" ");
console.log(".join(' '):", JoinSpace);

const JoinEmpty = numbers.join("");
console.log(".join(''):", JoinEmpty);
