'use strict'


export class MyCalculator {
        constructor() {
        const classicButton = document.createElement('button');
        classicButton.classList.add('button-square','col-md-3');
        const maDiv = document.createElement('div').
        maDiv.classList.add('container');
        document.body.append(maDiv);
        const button = document.createElement('button');
        button.textContent = "1";
        maDiv.append(button);
        
        }
        
    }     
        


// CREATION DE MES ELEMENTS

// visualiseur de résultats 
const previewBar = document.createElement('div');
previewBar.classList.add('result', 'col-md-12');

//les autres boutons sauf AC : 
const classicButton = document.createElement('button');
classicButton.classList.add('button-square','col-md-3')

//bouton AC :

const acButton = document.createElement('button');
acButton.classList.add('button-square_AC', 'col-md-3');

//bouton égal :
const equalButton = document.createElement('button');
equalButton.classList.add('equal', 'col-md-3');

// POSITIONNEMENT DES ELEMENTS :

// visualiseur de résultats :
// const body = document.body;
document.body.append(previewBar);

const body = document.createElement(‘div’);
body.textContent = "";

// les autres boutons :
// // const button = document.div;
// document.div.append(classicButton, acButton, equalButton);
// const button = document.createElement('div');
// div.textContent = "7";


// const maDiv = document.createElement('div').
// maDiv.classList.add('container');
// document.body.append(maDiv);
// const button = document.createElement('button');
// button.textContent = "1";
// maDiv.append(button);




