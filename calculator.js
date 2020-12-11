'use strict'
export default class Calculator {
    constructor() {
        // élément de div qui encadre tote la calculette
        const calculatorDiv = document.createElement('div');
        calculatorDiv.classList.add('calculatorborder', 'container');
        body.append(calculatorDiv);
        const body = document.body;

        
        //élément div qui encadre la barre preview:
        const previewDiv = document.createElement('div');
        previewDiv.classList.add('row');
        calculatorDiv.append(previewDiv);

        //élément div de prévisualisation du résultat:
        const previewBar = document.createElement('div');
        previewBar.classList.add('result', 'col-md-12');
        previewDiv.append(previewBar);

        //élément div : les boutons opérateurs sauf le =
        const operatorButton = document.createElement('div');
        operatorButton.classList.add('operator', 'row');
        calculatorDiv.append(operatorButton);
        
        //élément button +
        const operatorPlus = document.createElement('button');
        operatorButton.classList.add('button-square', 'col-md-3');
        operatorButton.append(operatorPlus);

    
    }  
}




