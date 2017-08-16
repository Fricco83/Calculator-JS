let calcItems = [
    {
        text: '9',
        value: 9,
    },
    {
        text: '8',
        value: 8,
    },
    {
        text: '7',
        value: 7,
    },
    {
        text: '6',
        value: 6,
    },
    {
        text: '5',
        value: 5,
    },
    {
        text: '4',
        value: 4,
    },
    {
        text: '3',
        value: 3,
    },
    {
        text: '2',
        value: 2,
    },
    {
        text: '1',
        value: 1,
    },
    {
        text: '0',
        value: 0,
    },
    {
        text: '*',
        value: '*',
    },
    {
        text: '÷',
        value: '/',
    },
    {
        text: '+',
        value: '+',
    },
    {
        text: '-',
        value: '-',
    },
    {
        text: '=',
        value: '=',
    },
    {
        text: '.',
        value: '.',
    },
];

let calculatorElem = document.getElementById('calculator');
let display = document.createElement('div');
display.classList.add('calc-display');
let clearBtn = createBtn('CE');
let currentVal = '';

clearBtn.addEventListener('click', function(){
    currentVal = '';
    updateDisplay();
});

calculatorElem.appendChild(display);
calculatorElem.appendChild(clearBtn);

calcItems.forEach(function(item) {
    let b = createBtn(item.text);

    if (item.value === '=') {
        b.classList.add('equals');
        b.addEventListener('click', function(){
            try {
                currentVal = '' + eval(currentVal);
            } catch (e) {
                console.log('Wrong expression');
                currentVal = '';
            }
            updateDisplay();
        });
    } else {
        if (typeof item.value === 'number') {
            b.classList.add('number');
        } else if (item.value === '.') {
            b.classList.add('decimal');
        } else {
            b.classList.add('operation');
        }

        b.addEventListener('click', function(){
            if (currentVal.length >= 9)
                return;
            currentVal += '' + item.value;
            updateDisplay();
        });
    }

    calculatorElem.appendChild(b);
});

function updateDisplay() {
    display.textContent = currentVal.substring(0, 9);
}

function createBtn(text) {
    let b = document.createElement('button');
    b.textContent = text;
    b.classList.add('calc-btn');
    return b;
}