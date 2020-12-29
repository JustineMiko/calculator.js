'use strict'

export default class Calculator {
    constructor() {
        // élément de div qui encadre toute la calculette
        const calculatorDiv = document.createElement('div');
        calculatorDiv.classList.add('calculatorborder', 'container');
        const body = document.body;
        body.append(calculatorDiv);

        
        //élément div qui encadre la barre preview:
        const previewDiv = document.createElement('div');
        previewDiv.classList.add('row');
        calculatorDiv.append(previewDiv);
        

        //élément div de prévisualisation du résultat:
        const previewBar = document.createElement('div');
        previewBar.classList.add('result', 'col-md-12');
        previewBar.type = text;
        previewDiv.append(previewBar);
        previewBar.value = "";
        previewBar.readOnly = true; //on ne peut pas changer le texte


        //élément div : les boutons opérateurs sauf le =
        const operatorButton = document.createElement('div');
        operatorButton.classList.add('operator', 'row');
        calculatorDiv.append(operatorButton);
        
        //élément button +
        const operatorPlus = document.createElement('button');
        operatorButton.classList.add('button-square', 'col-md-3', 'operator');
        operatorButton.append(operatorPlus);
        operatorPlus.textContent = "+";

        //élément button -
        const operatorMinus = document.createElement('button');
        operatorMinus.classList.add('button-square', 'col-md-3', 'operator');
        operatorButton.append(operatorMinus);
        operatorMinus.textContent = '-';

        //élement button x
        const operatorMulti = document.createElement('button');
        operatorMulti.classList.add('button-square', 'col-md-3', 'operator');
        operatorButton.append(operatorMulti);
        operatorMulti.textContent = "x";

        //élément button %
        const operatorDivide = document.createElement('button');
        operatorDivide.classList.add('button-square', 'col-md-3', 'operator');
        operatorButton.append(operatorDivide);
        operatorDivide.textContent = "÷";

        // élément div : encadre les boutons de 7 à 9 :
        const sevenToNine = document.createElement('div');
        sevenToNine.classList.add('firstrow', 'row');
        calculatorDiv.append(sevenToNine);

        // élément button 7
        const buttonSeven = document.createElement('button');
        buttonSeven.classList.add('button-square', 'col-md-3', 'number');
        sevenToNine.append(buttonSeven);
        buttonSeven.textContent = "7";

        // élément button 8
        const buttonEight = document.createElement('button')
        buttonEight.classList.add('button-square', 'col-md-3', 'number');
        sevenToNine.append(buttonEight);
        buttonEight = "8";

        // élément button 9
        const buttonNine = document.createElement('button')
        buttonNine.classList.add('button-square', 'col-md-3', 'number');
        sevenToNine.append(buttonNine);
        buttonNine.textContent = "9";

        // élément div : encadre les boutons de 4 à 6 :
        const fourToSix = document.createElement('div');
        fourToSix.classList.add('secondrow', 'row');
        calculatorDiv.append(fourToSix);

        // élément button 4
        const buttonFour = document.createElement('button');
        buttonFour.classList.add('button-square', 'col-md-3', 'number');
        fourToSix.append(buttonFour);
        buttonFour.textContent = "4";
    
        // élément button 5
        const buttonFive = document.createElement('button');
        buttonFive.classList.add('button-square', 'col-md-3', 'number');
        fourToSix.append(buttonFive);
        buttonFive.textContent = "5";

        // élément button 6
        const buttonSix = document.createElement('button');
        buttonSix.classList.add('button-square', 'col-md-3', 'number');
        fourToSix.append(buttonSix);
        buttonSix.textContent = "6";

        // élément div : encadre les boutons de 1 à 3 :
        const oneToThree = document.createElement('div');
        oneToThree.classList.add('thirdrow', 'row');
        calculatorDiv.append(oneToThree);

        // élément button 1
        const buttonOne = document.createElement('button');
        buttonOne.classList.add('button-square', 'col-md-3', 'number');
        oneToThree.append(buttonOne);
        buttonOne.textContent ="1";

        // élément button 2
        const buttonTwo = document.createElement('button');
        buttonTwo.classList.add('button-square', 'col-md-3', 'number');
        oneToThree.append(buttonTwo);
        buttonTwo.textContent = "2";

        // élément button 3
        const buttonThree = document.createElement('button');
        buttonThree.classList.add('button-square', 'col-md-3', 'number');
        oneToThree.append(buttonThree);
        buttonThree.textContent = "3";

        // élément div pour rangée des boutons 0 . et AC
        const lastRow = document.createElement('div');
        lastRow.classList.add('lastrow', 'row');
        calculatorDiv.append(lastRow);

        // élément button 0
        const buttonZero = document.createElement('button');
        buttonZero.classList.add('button-square', 'col-md-3', 'number');
        lastRow.append(buttonZero);
        buttonZero.textContent = "0";

        // élément button .
        const buttonPoint = document.createElement('button');
        buttonPoint.classList.add('button-square', 'col-md-3');
        lastRow.append(buttonPoint);
        buttonPoint.textContent = ".";

        // élément button AC
        const buttonAc = document.createElement('button');
        buttonAc.classList.add('button-square_AC col-md-3');
        lastRow.append(buttonAc);
        buttonAc.textContent = "AC";

        // élément div encadrant le bouton égal 
        const equalDiv = document.createElement('div');
        equalDiv.classList.add('row', 'equal');
        calculatorDiv.append(equalDiv);

        // élément button du =
        const equalButton = document.createElement('div');
        equalButton.classList.add('equal', 'col-md-3');
        equalDiv.append(equalButton);
        equalButton.textContent = "=";

    }  

    function previewBarNumber() {
        console.log(this.textContent);
        let result = document.querySelector(".result");
        result.textContent += this.textContent;
    }
    
    let buttons = document.querySelectorAll(".number");
    
    for(let i=0; i<buttons.length;i++) {
        buttons[i].addEventListener("click", printNumber);
    }

}

selected.addEventListener("click", previewBarNumber);





