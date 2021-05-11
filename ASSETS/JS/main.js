/* SNACK 1: */
// 1. Creare un array di oggetti, 
// 2. ogni oggetto descriverà una bici da corsa con le seguenti proprietà:
//    nome 
//    peso
// 3. Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

/* var bikes = [
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
); */


/* SNACK 2: */
// 1. Creare un array di oggetti di squadre di calcio. 
// 2. Ogni squadra avrà diverse proprietà:
//    nome
//    punti fatti
//    falli subiti
// 4. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
//    Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
// 5. Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

const Teams = [
    {
        nome: 'Milan',
        puntiFatti: random(1, 30),
        falliSubiti: random(1,50)
    },
    {
        nome: 'Juventus',
        puntiFatti: random(1, 30),
        falliSubiti: random(1,50)
    },
    {
        nome: 'Inter',
        puntiFatti: random(1, 30),
        falliSubiti: random(1,50)
    },
    {
        nome: 'Atalanta',
        puntiFatti: random(1, 30),
        falliSubiti: random(1,50)
    },
]

for(var i = 0; i < Teams.length; i++) {
    var element = Teams[i];
    console.log(element);
}

const [nome, puntiFatti] = Teams;
console.log(nome, puntiFatti, );

    