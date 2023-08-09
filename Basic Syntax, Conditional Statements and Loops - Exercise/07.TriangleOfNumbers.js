function triangleOfNumbers(num) {
    for( let x = 1; x <= num; x++){ 
        let printLine = ''
        for ( let y = 1; y <= x; y++){
            printLine += `${x} `; 
        } 
        console.log(printLine);
    }
}triangleOfNumbers(3)