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
        nome: 'Trek Madone SLR 9',
        peso: 7.9
    },
    {
        nome: 'Canyon Aeroad CFR2',
        peso: 7.2
    },
    {
        nome: 'Wilier Zero SLR Disc Dura-Ace',
        peso: 6.9
    },
    {
        nome: 'Trek Emonda SLR 9 Disc',
        peso: 6.5
    },
]

const min = [];
for(let i = 0; i < bikes.length; i++) {
    const element = bikes[i];
    const {peso} = element;
    min.push(peso);
}

console.log(min);
console.log(
    `
    La bici più leggera pesa: ${Math.min (...min)} Kg
    `
);


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

const teams = [
    {
        nome: 'Milan',
        puntiFatti: random(1, 100),
        falliSubiti: random(1,200)
    },
    {
        nome: 'Juventus',
        puntiFatti: random(1, 100),
        falliSubiti: random(1,200)
    },
    {
        nome: 'Inter',
        puntiFatti: random(1, 100),
        falliSubiti: random(1,200)
    },
    {
        nome: 'Atalanta',
        puntiFatti: random(1, 100),
        falliSubiti: random(1,200)
    },
    {
        nome: 'Crotone',
        puntiFatti: random(1, 100),
        falliSubiti: random(1,200)
    },
    {
        nome: 'Parma',
        puntiFatti: random(1, 100),
        falliSubiti: random(1,200)
    },
    {
        nome: 'Spezia',
        puntiFatti: random(1, 100),
        falliSubiti: random(1,200)
    },
    {
        nome: 'Benevento',
        puntiFatti: random(1, 100),
        falliSubiti: random(1,200)
    },
    {
        nome: 'Fiorentina',
        puntiFatti: random(1, 100),
        falliSubiti: random(1,200)
    },
    {
        nome: 'Lazio',
        puntiFatti: random(1, 100),
        falliSubiti: random(1,200)
    },
    {
        nome: 'Roma',
        puntiFatti: random(1, 100),
        falliSubiti: random(1,200)
    },
    {
        nome: 'Torino',
        puntiFatti: random(1, 100),
        falliSubiti: random(1,200)
    },
    {
        nome: 'Bologna',
        puntiFatti: random(1, 100),
        falliSubiti: random(1,200)
    },  
    {
        nome: 'Genoa',
        puntiFatti: random(1, 100),
        falliSubiti: random(1,200)
    },
    {
        nome: 'Sampdoria',
        puntiFatti: random(1, 100),
        falliSubiti: random(1,200)
    },
    {
        nome: 'Udinese',
        puntiFatti: random(1, 100),
        falliSubiti: random(1,200)
    },
    {
        nome: 'Cagliari',
        puntiFatti: random(1, 100),
        falliSubiti: random(1,200)
    },
    {
        nome: 'Napoli',
        puntiFatti: random(1, 100),
        falliSubiti: random(1,200)
    },
    {
        nome: 'Sassuolo',
        puntiFatti: random(1, 100),
        falliSubiti: random(1,200)
    },
    {
        nome: 'Verona',
        puntiFatti: random(1, 100),
        falliSubiti: random(1,200)
    },
]

const newArray = []
for(let i = 0; i < teams.length; i++) {
    const element = teams[i];
    console.log(element);

    const {nome, falliSubiti} = element;
    newArray.push({nome, falliSubiti})
}

console.log(newArray);


    