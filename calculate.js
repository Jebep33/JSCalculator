var num1=null, num2=null, operation,result;
let buttons = document.querySelectorAll("button");
let input = document.querySelector("input");
let operationClicked = false;
let dot = document.querySelector("#dot");


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
            case ('dot'): 
                if(input.value == "" || operationClicked){
                    alert("Invalid. Please press a digit.");
                    break;
                }
                appendString('.');
                dot.disabled = true;
                break;
            case ('plus'): 
                if(operationClicked === true){
                    alert('Invalid. Two numbers are needed');
                    break;
                }
                storeValue();
                if(num2 !== null){
                    equals();
                }
                operation = "add";
                dot.disabled = false;
                break;
            case ('times'):
                if(operationClicked === true){
                    alert('Invalid. Two numbers are needed');
                    break;
                }
                storeValue();
                if(num2 !== null){
                    equals();
                }
                operation = "multiply";
                dot.disabled = false;
                break;
            case ('divide'):
                if(operationClicked === true){
                    alert('Invalid. Two numbers are needed');
                    break;
                }
                storeValue();
                if(num2 !== null){
                    equals();
                }
                operation = "divide";
                dot.disabled = false;
                break;
            case ('minus'):
                if(operationClicked === true){
                    alert('Invalid. Two numbers are needed');
                    break;
                }
                storeValue();
                if(num2 !== null){
                    equals();
                }
                operation = "subtract";
                dot.disabled = false;
                break;
            case ('equals'): 
                if(num1 === null) {
                    alert("Two numbers are needed.");
                    break;
                }
                storeValue();
                equals();
                num1=null;
                dot.disabled = false;
                break;
            case ('clear'):
                input.value = "";
                num1 = null;
                num2 = null;
                operation = null;
                operationClicked = false;
                dot.disabled = false;
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
    if (b === 0) {
        return "Did you even go to school?";
    }
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
    resetInput();
    input.value = input.value + stringToAppend;
}

function storeValue(){
    if(isEmpty()){
        alert('Please input value.');
    }
    else if(num1 !== null && num2 === null){
        num2 = parseFloat(input.value);
    }
    else if(num1 === null){
        num1 = parseFloat(input.value);
    }
    else alert("Invalid.");
    operationClicked = true;
}

function isEmpty (){
    if (input.value == null || input.value == NaN || input.value == "" || input.value == undefined){
        return true;
    }
    else return false;
}

function equals(){
    result = operate(num1,operation,num2);
    if(typeof result === "string"){
        input.value = result;
        num1 = null;
    }else {
        input.value = result.toFixed(2);
        num1 = result;
    }
    num2 = null;
}

function resetInput(){
    if(operationClicked && num2 === null){
        input.value = "";
        operationClicked = false;
    }
}