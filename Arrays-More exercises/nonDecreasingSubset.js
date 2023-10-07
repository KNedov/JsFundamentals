function nonDecreasingSubset(array) {
    let newArray=[];
for (let i = 0; i < array.length; i++) {
 let element1 = array[i];
 for (let j = i+1; j < array.length; j++) {
    let element2 = array[j];
    if (element1<element2){
newArray.push(element1)
    }
    
 }
    
}console.log(newArray);
    
}
nonDecreasingSubset([ 1, 3, 8, 4, 10, 12, 3, 2, 24])
nonDecreasingSubset([ 1, 2, 3, 4])
nonDecreasingSubset([ 20, 3, 2, 15, 6, 1])