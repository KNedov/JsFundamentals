function arrayRotation(arr,nRotations) {
    
  
    for (let i = 0; i < nRotations; i++) {
      arr.push(arr.shift());
    }
    console.log(arr.join(" "));
  }
arrayRotation([51, 47, 32, 61, 21], 2);
//arrayRotation([2, 4, 15, 31], 5)
