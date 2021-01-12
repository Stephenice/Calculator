'use strict';
// select all element 
const numberButtons = document.querySelectorAll('[data-number]');
const operationButton = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousOperandTextElement =  document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');


// create a bluprint class
class Calculator {
    //constructor 
    constructor(previousOperandTextElement, currentOperandTextElement){
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
    }


    //create a function
    clear(){}

    delete(){}

    //use to display the number in the screen
    appendNumber(){}

    chooseOperation(){}

    compute(){}

    updateDisplay(){}

} 
