var num1, num2, operation;
let buttons = document.querySelectorAll("button");
let input = document.querySelector("input");
let operationClicked = false;

buttons.forEach(button => {
    button.addEventListener("click",event => {
        switch(event.target.id){
            case ('one'): appendString('1'); break;
            case ('two'): appendString('2'); break;
            case ('three'): appendString('3'); break;
            case ('four'): appendString('4'); break;
            case ('five'): appendString('5'); break;
            case ('six'): appendString('6'); break;
            case ('seven'): appendString('7'); break;
            case ('eight'): appendString('8'); break;
            case ('nine'): appendString('9'); break;
            case ('zero'): appendString('0'); break;
            case ('dot'): appendString('.'); break;
            case ('plus'): 
            case ('times'):
            case ('divide'):
            case ('minus'):
                storeValue(input.value);
                console.log(`${num1},${operationClicked}`);
                break;
            default: alert("Invalid"); break;
        }
    });
});

function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

function operate(num1,operation,num2){
    switch(operation){
        case '+': add(num1,num2); break;
        case '-': subtract(num1,num2); break;
        case '*': multiply(num1,num2); break;
        case '/': divide(num1,num2); break;
        default: alert("Invalid!");
    }
}

function appendString(stringToAppend){
    input.value = input.value + stringToAppend;
}

function storeValue(value){
    num1 = parseInt(value);
    input.value = "";
    operationClicked = true;
}