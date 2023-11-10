function storeProvision(stock,product) {
  let localStore=[]
  let object ={}
  
 for (let i = 0; i < stock.length; i+=2) {
 
    
  let name =stock[i]
     let quantity =Number( stock[i+1])
   
     object={
     name:name,quantity: quantity
    }
    localStore.push(object)
 
   
   }
   for (const iterator of product) {
    let name =product.shift(iterator)
    let quantity =Number(product.shift(iterator))
    
   }
   console.log(localStore);
 
    
}
storeProvision(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
storeProvision(
  ["Salt", "2", "Fanta", "4", "Apple", "14", "Water", "4", "Juice", "5"],
  ["Sugar", "44", "Oil", "12", "Apple", "7", "Tomatoes", "7", "Bananas", "30"]
);
