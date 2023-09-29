function reverseInPlace(arr) {
for (let i = 0; i< arr.length/2;i++) {
    let j = arr.length-1-i
   let buff=arr[i];
   arr[i] = arr[j];
   arr[j] = buff;
   
    

}console.log(arr.join(" "));
}
reverseInPlace(["a", "b", "c", "d", "e"]);
reverseInPlace(["abc", "def", "hig", "klm", "nop"]);
reverseInPlace(['33', '123', '0', 'dd']);
