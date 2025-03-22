var num1, num2, operation;

const button = document.querySelectorAll(button);


    
;

function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}_

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