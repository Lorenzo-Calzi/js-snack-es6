/* SNACK 1: */
// 1. Creare un array di oggetti, 
// 2. ogni oggetto descriverà una bici da corsa con le seguenti proprietà:
//    nome 
//    peso
// 3. Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

var bikes = [
    {
        nome: 'Cannondale SuperSix Evo',
        peso: 7.3
    },
    {
        nome: 'Giant TCR Advanced Pro',
        peso: 6.7
    },
    {
        nome: 'Specialized S-Works Tarmac',
        peso: 6.8
    },
    {
        nome: 'Cannondale SystemSix',
        peso: 7.6
    },
]

/* var min = [];

for(var i = 0; i < bikes.length; i++) {

    var element = bikes[i];
    console.log(element.peso);
    min.push(element.peso);
}

console.log(min)
console.log('Numero Minore: ' + Math.min (...min)); */

var min = [];

for(var i = 0; i < bikes.length; i++) {
    var element = bikes[i];
    const {peso} = element;
    min.push(peso);
}

console.log(min);
console.log(
    `
    Numero Minore: ${Math.min (...min)}
    `
);




    