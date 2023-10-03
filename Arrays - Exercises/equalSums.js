function equalSums(arr) {
    /* Write a function that determines if there exists an element in the array of numbers such that the sum 
      of the elements on its left is equal to the sum of the elements on its right. 
      If there are NO elements to the left/right, their sum is 0. 
      Print the index that satisfies the required condition or "no" if there is no such index. */
  
    let hasEqualSum = false;
  
    for (let index = 0; index < arr.length; index++) {
      let leftSum = 0;
      let rightSum = 0;
      for (let j = index - 1; j >= 0; j--) {
        leftSum += arr[j];
      }
      for (let n = index + 1; n < arr.length; n++) {
        rightSum += arr[n];
      }
      if (rightSum === leftSum) {
        console.log(index);
        hasEqualSum = true;
      }
    }
    if (!hasEqualSum) {
      console.log("no");
    }
  }
//equalSums([1, 2, 3, 3])
//equalSums([1, 2])
//equalSums([1])
//equalSums([1, 2, 3])
//equalSums([10, 5, 5, 99,3, 4, 2, 5, 1,1, 4])