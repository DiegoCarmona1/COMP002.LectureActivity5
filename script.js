const array = [3, 5, 17, -4, 6];
console.log(array[0])
console.log(array[4])
// I passed from no indexes for the first statement to passing through 4 indexes for the last, the reason being that for computations, the numbering starts at 0.
for (let i = 0; i < array.length; i++){
    console.log(array[i]);
}
array.push(5, 42, 33, 17, 0);
console.log(array);
array.pop();
array.pop();
array.pop();
console.log(array);

var myString = ("welcome to the chaos")
console.log(myString.length())