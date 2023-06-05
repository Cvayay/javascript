function findLargestNumber(arr) {
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > largest) {
        largest = arr[i];
      }
    }
    return largest;
  }
  let numbers = [1, 5, 2, 9, 3, 7];
  let largestNumber = findLargestNumber(numbers);
  console.log("The largest number in the array is: " + largestNumber);    