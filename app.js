'use strict'

import Calculator from "./calculator.js";

let calc1 = new Calculator();
let calc2 = new Calculator();

// class Calculator {
//     constructor() {
//         // élément de div qui encadre toute la calculette
//         const calculatorDiv = document.createElement('div');
//         body.append(calculatorDiv);
//         const body = document.body;

        
//         //élément div qui encadre la barre preview:
//         const previewDiv = document.createElement('div');
//         calculatorDiv.append(previewDiv);

//         //élément div de prévisualisation du résultat:
//         const previewBar = document.createElement('div');
//         previewDiv.append(previewBar);

//         //élément div : les boutons opérateurs sauf le =
//         const operatorButton = document.createElement('div');
//         calculatorDiv.append(operatorButton);
        
//         //élément button +
//         const operatorPlus = document.createElement('button');
//         operatorButton.append(operatorPlus);

//         //élément button -
//         const operatorMinus = document.createElement('button');
//         operatorButton.append(operatorMinus);

//         //élement button x
//         const operatorMulti = document.createElement('button');
//         operatorButton.append(operatorMulti);

//         //élément button %
//         const operatorDivide = document.createElement('button');
//         operatorButton.append(operatorDivide);

//         // élément div : encadre les boutons de 7 à 9 :
//         const sevenToNine = document.createElement('div');
//         calculatorDiv.append(sevenToNine);

//         // élément button 7
//         const buttonSeven = document.createElement('button');
//         sevenToNine.append(buttonSeven);

//         // élément button 8
//         const buttonEight = document.createElement('button')
//         sevenToNine.append(buttonEight);

//         // élément button 9
//         const buttonNine = document.createElement('button')
//         sevenToNine.append(buttonNine);

//         // élément div : encadre les boutons de 4 à 6 :
//         const fourToSix = document.createElement('div');
//         calculatorDiv.append(fourToSix);

//         // élément button 4
//         const buttonFour = document.createElement('button');
//         fourToSix.append(buttonFour);
    
//         // élément button 5
//         const buttonFive = document.createElement('button');
//         fourToSix.append(buttonFive);

//         // élément button 6
//         const buttonSix = document.createElement('button');
//         fourToSix.append(buttonSix);

//         // élément div : encadre les boutons de 1 à 3 :
//         const oneToThree = document.createElement('div');
//         calculatorDiv.append(oneToThree);

//         // élément button 1
//         const buttonOne = document.createElement('button');
//         oneToThree.append(buttonOne);

//         // élément button 2
//         const buttonTwo = document.createElement('button');
//         oneToThree.append(buttonTwo);

//         // élément button 3
//         const buttonThree = document.createElement('button');
//         oneToThree.append(buttonThree);

//         // élément div pour rangée des boutons 0 . et AC
//         const lastRow = document.createElement('div');
//         calculatorDiv.append(lastRow);

//         // élément button 0
//         const buttonZero = document.createElement('button');
//         lastRow.append(buttonZero);

//         // élément button .
//         const buttonPoint = document.createElement('button');
//         lastRow.append(buttonPoint);

//         // élément button AC
//         const buttonAc = document.createElement('button');
//         lastRow.append(buttonAc);

//         // élément div encadrant le bouton égal 
//         const equalDiv = document.createElement('div');
//         calculatorDiv.append(equalDiv);

//         // élément button du =
//         const equalButton = document.createElement('div');
//         equalDiv.append(equalButton);


//     }  
// }




