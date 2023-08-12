function rightPlace(stringChar,char,string) {
    let readyString = ""
for (let i = 0; i < stringChar.length; i++) {
    
    if (stringChar[i]=="_"){
        readyString+=char

    }else{
        readyString+=stringChar[i]
    }
}
if (readyString===string) {
    console.log("Matched");
}else{
    console.log("Not Matched");
}
}
rightPlace("Str_ng", "I", "Strong");
rightPlace("Str_ng", "i", "String");
