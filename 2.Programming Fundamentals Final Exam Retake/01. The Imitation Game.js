function imitationGame(input) {
    let encryptedMsg=input.shift();
    let tokens = input.shift()
    
    while (tokens!=='Decode') {
       
        tokens=tokens.split('|')
        let command=tokens.shift()
        
        if (command=="Insert") {
           let idx = tokens.shift()
           let letter=tokens.shift()
           encryptedMsg=encryptedMsg.substring(0,idx)+letter+encryptedMsg.substring(idx)
         
        }else if (command=='Move') {
            let letterCount=Number(tokens.shift())
          
            let buffer= encryptedMsg.substring(0,letterCount)
            encryptedMsg=encryptedMsg.replace(buffer,'')
            encryptedMsg=encryptedMsg+buffer
   
        }else if (command=="ChangeAll"){
            let [substring,replacement]=tokens
            while(encryptedMsg.includes(substring)){
                encryptedMsg=encryptedMsg.replace(substring,replacement)
            }
        }
       
        tokens = input.shift()
    }
    console.log(encryptedMsg);
}
imitationGame([
  'zzHe',
  'ChangeAll|z|l',
  'Insert|2|o',
  'Move|3',
  'Decode',
]

)