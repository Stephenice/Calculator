'use strict';

const calculator = document.querySelector('.calculator');
const keys = document.querySelector('.calculator__keys');
const dispaly = document.querySelector('.calculator__display');

keys.addEventListener('click', e => {
    if(e.target.matches('button')){
        const key = e.target;
        const action = key.dataset.action;
        const keyContent = key.textContext;
        const displayedNum = display.textContext;

        if (!action) {
            if (displayedNum === '0') {
              display.textContent = keyContent;
            } else {
              display.textContent = displayedNum + keyContent;
            }
          }


          if (action === 'decimal') {
            display.textContent = displayedNum + '.';
          }

          if (
            action === 'add' ||
            action === 'subtract' ||
            action === 'multiply' ||
            action === 'divide'
          ) {
            key.classList.add('is-depressed')
          }







    }
})