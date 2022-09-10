// Expected Result = 7
// Direction : Find median of this array
const input = [8, 7, 7, 9, 5, 4, 2, 9];

function result(input) {
  // Your Code Here
  input.sort(function(a,b){
    return a-b;
});
var half = Math.floor(input.length / 2);

if (input.length % 2)
    return input[half];
else
    return (input[half - 1] + input[half]) / 2.0;
}

console.log(result(input))