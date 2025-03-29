var num1, num2, operation,result=0;
let buttons = document.querySelectorAll("button");
let input = document.querySelector("input");
let operationClicked = false;

/*
TO DO
1. Create a condition - operationClicked is TRUE, and any operation is clicked again
    - perform operation with current numbers
    - store value in num1
    - display num1 in input box
2. If equals is clicked, num1 is not empty, operationClicked is true
    - perform operation as normal
    - clear all values and input
3. If equals is clicked - num1 is empty, operationClicked is false
    - return an error
*/ 

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
                storeValue(input.value);
                operation = "add";
                console.log(`${num1},${operationClicked},${operation}`);
                break;
            case ('times'):
                storeValue(input.value);
                operation = "multiply";
                console.log(`${num1},${operationClicked},${operation}`);
                break;
            case ('divide'):
                storeValue(input.value);
                operation = "divide";
                console.log(`${num1},${operationClicked},${operation}`);
                break;
            case ('minus'):
                storeValue(input.value);
                operation = "subtract";
                console.log(`${num1},${operationClicked},${operation}`);
                break;
            case ('equals'): 
                if(isEmpty()){
                    alert('Please input value.');
                }
                else{
                    num2 = parseInt(input.value);
                    result = operate(num1,operation,num2);
                    input.value = result;
                }
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

function operate(var1,operation,var2){
    let outcome = 0;
    
    switch(operation){
        case 'add': outcome = add(var1,var2); break;
        case 'subtract': outcome = subtract(var1,var2); break;
        case 'multiply': outcome = multiply(var1,var2); break;
        case 'divide': outcome = divide(var1,var2); break;
        default: alert("Invalid!");
    }
    return outcome;
}

function appendString(stringToAppend){
    input.value = input.value + stringToAppend;
}

function storeValue(value){
    if (isEmpty()){
        alert('Please input value.');
    }
    else{
        operationClicked = true;
    }
    num1 = parseInt(value);
    input.value = "";
}

function isEmpty (){
    if (input.value == null || input.value == NaN || input.value == "" || input.value == undefined){
        return true;
    }
    else return false;
}