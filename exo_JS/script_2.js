let num = prompt("De quel nombre veux-tu calculer la factorielle ?")
let n = num - 1 ;
let cash = num ;
while(n > 0){
    cash = n * cash
    n--
}
console.log(`${cash}`);