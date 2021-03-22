const fizzbuzz = (n) => {
  const newArr = []
  // if empty array is passed
  if (n < 1) {
    return "fizzbuzz cannot be determined"
  }

  for (i = 1; i <= n; i++ ) {
    if (i % 3 === 0 && i % 5 === 0) {
        newArr.push("fizzbuzz")
    } else if (i % 3 === 0) {
      newArr.push("fizz")
    } else if (i % 5 === 0) {
      newArr.push("buzz")
    } else {
      newArr.push(i)
    }
  };

  return newArr;
}

//console.log(fizzbuzz(20))


const twoSum = (arr, target) => {
  /**
   * loop through the array, and for each element
   * minus it from the target and check if the resulting value is in the array
   *
   */

  const numTracker = {}
  let secondVal;
  for (i = 0; i < arr.length; i++) {
      secondVal = target - arr[i];
      if (numTracker[secondVal] in numTracker) {
        return [arr[i], secondVal]
      } else {
        numTracker[arr[i]] = i
      }
    
  }
  return "cannot be found"
}

console.log(twoSum([1,1,3], 5))