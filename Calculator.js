export class Calculator {
    constructor() {
        // élément de div qui encadre toute la calculette
        const calculatorDiv = document.createElement('div');
        calculatorDiv.classList.add('container', 'row', 'calculator');
        const body = document.body;
        body.append(calculatorDiv);

        
        //élément div qui encadre la barre preview:
        const previewDiv = document.createElement('div');
        previewDiv.classList.add('row');
        calculatorDiv.append(previewDiv);
        

        //élément div de prévisualisation du résultat:
        const previewBar = document.createElement('div');
        previewBar.classList.add('result', 'col-md-12');
        previewDiv.append(previewBar);
        previewBar.value = "";
        // previewBar.readOnly = true; 

        //div qui encadre tous les boutons:
        const allButtons = document.createElement('div');
        allButtons.classList.add('calculator-button');
        calculatorDiv.append(allButtons);

        //élément div : les boutons opérateurs sauf le =
        const operatorButton = document.createElement('div');
        operatorButton.classList.add('operator', 'row', 'container', 'button');
        calculatorDiv.append(operatorButton);
        
        //élément button +
        const operatorPlus = document.createElement('button');
        operatorPlus.classList.add('button-square', 'col-md-3', 'operator', 'inline', 'button');
        operatorButton.append(operatorPlus);
        operatorPlus.textContent = "+";
        operatorPlus.value = "+";


        //élément button -
        const operatorMinus = document.createElement('button');
        operatorMinus.classList.add('button-square', 'col-md-3', 'operator', 'inline', 'button');
        operatorButton.append(operatorMinus);
        operatorMinus.textContent = '-';
        operatorMinus.value = '-';


        //élement button x
        const operatorMulti = document.createElement('button');
        operatorMulti.classList.add('button-square', 'col-md-3', 'operator', 'inline', 'button');
        operatorButton.append(operatorMulti);
        operatorMulti.textContent = "x";
        operatorMulti.value = "*";


        //élément button %
        const operatorDivide = document.createElement('button');
        operatorDivide.classList.add('button-square', 'col-md-3', 'operator', 'inline', 'button');
        operatorButton.append(operatorDivide);
        operatorDivide.textContent = "÷";
        operatorDivide.value = "/";


        // élément div : encadre les boutons de 7 à 9 :
        const sevenToNine = document.createElement('div');
        sevenToNine.classList.add('firstrow', 'row');
        calculatorDiv.append(sevenToNine);

        // élément button 7
        const buttonSeven = document.createElement('button');
        buttonSeven.classList.add('button-square', 'col-md-3', 'number', 'button');
        sevenToNine.append(buttonSeven);
        buttonSeven.textContent = "7";
        buttonSeven.textContent = "7";
        buttonSeven.value = "7";


        // élément button 8
        const buttonEight = document.createElement('button');
        buttonEight.classList.add('button-square', 'col-md-3', 'number', 'button');
        sevenToNine.append(buttonEight);
        buttonEight.textContent = "8";
        buttonEight.value = "8";


        // élément button 9
        const buttonNine = document.createElement('button');
        buttonNine.classList.add('button-square', 'col-md-3', 'number', 'button');
        sevenToNine.append(buttonNine);
        buttonNine.textContent = "9";
        buttonNine.value = "9";


        // élément div : encadre les boutons de 4 à 6 :
        const fourToSix = document.createElement('div');
        fourToSix.classList.add('secondrow', 'row');
        calculatorDiv.append(fourToSix);

        // élément button 4
        const buttonFour = document.createElement('button');
        buttonFour.classList.add('button-square', 'col-md-3', 'number', 'button');
        fourToSix.append(buttonFour);
        buttonFour.textContent = "4";
        buttonFour.value = "4";

    
        // élément button 5
        const buttonFive = document.createElement('button');
        buttonFive.classList.add('button-square', 'col-md-3', 'number', 'button');
        fourToSix.append(buttonFive);
        buttonFive.textContent = "5";
        buttonFive.value = "5";


        // élément button 6
        const buttonSix = document.createElement('button');
        buttonSix.classList.add('button-square', 'col-md-3', 'number', 'button');
        fourToSix.append(buttonSix);
        buttonSix.textContent = "6";
        buttonSix.value = "6";


        // élément div : encadre les boutons de 1 à 3 :
        const oneToThree = document.createElement('div');
        oneToThree.classList.add('thirdrow', 'row');
        calculatorDiv.append(oneToThree);

        // élément button 1
        const buttonOne = document.createElement('button');
        buttonOne.classList.add('button-square', 'col-md-3', 'number', 'button');
        oneToThree.append(buttonOne);
        buttonOne.textContent ="1";
        buttonOne.value ="1";

        // élément button 2
        const buttonTwo = document.createElement('button');
        buttonTwo.classList.add('button-square', 'col-md-3', 'number', 'button');
        oneToThree.append(buttonTwo);
        buttonTwo.textContent = "2";
        buttonTwo.value = "2";


        // élément button 3
        const buttonThree = document.createElement('button');
        buttonThree.classList.add('button-square', 'col-md-3', 'number', 'button');
        oneToThree.append(buttonThree);
        buttonThree.textContent = "3";
        buttonThree.value = "3";

        // élément div pour rangée des boutons 0 . et AC
        const lastRow = document.createElement('div');
        lastRow.classList.add('lastrow', 'row');
        calculatorDiv.append(lastRow);

        // élément button 0
        const buttonZero = document.createElement('button');
        buttonZero.classList.add('button-square', 'col-md-3', 'number', 'button');
        lastRow.append(buttonZero);
        buttonZero.textContent = "0";
        buttonZero.value = "0";


        // élément button .
        const buttonPoint = document.createElement('button');
        buttonPoint.classList.add('button-square', 'col-md-3', 'decimal', 'button');
        lastRow.append(buttonPoint);
        buttonPoint.textContent = ".";
        buttonPoint.value = ".";

        // élément button AC
        const buttonAc = document.createElement('button');
        buttonAc.classList.add('button-square_AC', 'all-clear', 'col-md-3', 'button');
        lastRow.append(buttonAc);
        buttonAc.textContent = "AC";
        buttonAc.value = "all-clear";

        // élément div encadrant le bouton égal 
        const equalDiv = document.createElement('div');
        equalDiv.classList.add('row', 'equal', 'container');
        calculatorDiv.append(equalDiv);

        // élément button du =
        const equalButton = document.createElement('div');
        equalButton.classList.add('equal', 'float-md-right', 'button');
        equalDiv.append(equalButton);
        equalButton.textContent = "=";
    }

    calculator = {
      displayValue: '0',
      firstOperand: null,
      waitingForSecondOperand: false,
      operator: null,
    };
          
    inputDigit(digit) {
      const { displayValue, waitingForSecondOperand } = calculator;
          
      if (waitingForSecondOperand === true) {
        calculator.displayValue = digit;
        calculator.waitingForSecondOperand = false;
      } else { calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;}
    }
          
    inputDecimal(dot) {
      // if interger
      if (!calculator.displayValue.includes(dot)) {
      // if float
        calculator.displayValue += dot;
      }
    }
          
    handleOperator(nextOperator) {
      const { firstOperand, displayValue, operator } = calculator;
      const inputValue = parseFloat(displayValue);
          
      if (operator && calculator.waitingForSecondOperand)  {
        calculator.operator = nextOperator;
        return;
      }
          
      if (firstOperand == null) {
        calculator.firstOperand = inputValue;
      } else if (operator) {
        const currentValue = firstOperand || 0;
        const result = performCalculation[operator](currentValue, inputValue);

        calculator.displayValue = String(result);
        calculator.firstOperand = result;
      }
          
      calculator.waitingForSecondOperand = true;
      calculator.operator = nextOperator;
    }
          
    performCalculation = {
            '/': (firstOperand, secondOperand) => firstOperand / secondOperand,
            '*': (firstOperand, secondOperand) => firstOperand * secondOperand,
            '+': (firstOperand, secondOperand) => firstOperand + secondOperand,
            '-': (firstOperand, secondOperand) => firstOperand - secondOperand,
            '=': (firstOperand, secondOperand) => secondOperand,
          };
          
    resetCalculator() {
      calculator.displayValue = '0';
      calculator.firstOperand = null;
      calculator.waitingForSecondOperand = false;
      calculator.operator = null;
    }
          
    updateDisplay() {
      const display = document.querySelector('.result');
      display.value = calculator.displayValue;
    }
          
    updateDisplay();
          
    const keys = document.querySelector('.calculator-button');
    keys.addEventListener('click', (event) => {
      const { target } = event;
      if (!target.matches('button')) {
        return;
      }
          
      if (target.classList.contains('operator')) {
        handleOperator(target.value);
            updateDisplay();
        return;
      }
          
      if (target.classList.contains('decimal')) {
        inputDecimal(target.value);
            updateDisplay();
        return;
      }
          
      if (target.classList.contains('all-clear')) {
        resetCalculator();
            updateDisplay();
        return;
      }
          
      inputDigit(target.value);
      updateDisplay();

    });

export default Calculator;