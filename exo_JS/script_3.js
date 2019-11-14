var num = prompt("choisi un nombre")

let space = "";
let symbole = "#";
for ( let count = 1 ; count <= num; count++ ){
    console.log(`${space.repeat(num-count)}${symbole.repeat(count)}`);
}
