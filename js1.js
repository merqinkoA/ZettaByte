const number = [1, 2, 3, 4, 5, 6, 7, 8]
var evenArr=[]; 
var oddArr = [];
var i;
function result(Arr1) {
    // Your Code Here
       
for (i = 0; i <= Arr1.length; i = i + 2) {
    if (Arr1[i] % 2 == 0) {
     evenArr.push(Arr1[i]);
       oddArr.push(Arr1[i + 1]);
    }  return 
  
}
  }
  
  console.log(result(number));