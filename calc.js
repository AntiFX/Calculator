function add(num1, num2){return num1 + num2;}

function subtract(num1, num2){return num1 - num2;}

function multiply(num1, num2){return num1 * num2;}

function divide(num1, num2){return num1 / num2;}

function operator(num1, num2, oper){
    switch(oper){
        case '+':
            return add(num1,num2);
            break;
        case '-':
            return subtract(num1,num2);
            break;
        case 'x':
            return multiply(num1,num2);
            break;
        case '/':
            return divide(num1,num2);
    }
}
let num1 = "";
let num2 = "";
let oper = "";
let answer = "";

function updateDisplay(value){
    value = value.currentTarget.attributes.id.value;

    if(/[=]/.test(value) && (num1 == "" || num2 == "")){
        oper = "";
    }else if (/[0-9.]/.test(value) == true && oper == ""){
        answer = "";
        num1 += value;
    }else if(/[0-9.]/.test(value) == false && oper == "" && answer != ""){
        num1 = answer;
        answer = "";
        oper = value;
    }else if (/[0-9.]/.test(value) == false && oper == ""){
        oper = value;
    } else if (/[0-9.]/.test(value) == true && oper != ""){
        num2 += value;
    } else if (/[0-9.]/.test(value) == false && oper != ""){
       answer = operator(parseFloat(num1), parseFloat(num2), oper);
       if (answer.toString().length > 20){
           answer = answer.toPrecision(20);
       }
        if(/[=]/.test(value)){
        oper = "";
        } else {oper = value;}
        num1 = answer;
        num2 = "";
        }

    return document.querySelector('.screen').innerText = `${num1} ${oper} ${num2}`;
    
}
function clearDisplay(){
    num1 = "";
    num2 = "";
    oper = "";
    answer = "";
    return document.querySelector('.screen').innerText = `${num1} ${oper} ${num2} ${answer}`;
}

const buttons = document.querySelectorAll('.button');
for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', updateDisplay);
}

const clear = document.querySelector('.clear');
clear.addEventListener('click', clearDisplay);