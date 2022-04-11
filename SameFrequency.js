//WAF called same, which accepts two array.
//the function should return true if every value in the array should return true if
//every value in the array has it's corresponding value squared in the second array.
//The frequency of the values must be same

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf[arr1 ** 2];
    if (correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1);
  }
  return true;
}

console.log(same([1, 2, 3], [4, 1, 9]));
