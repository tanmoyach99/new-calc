const defaultResult = 0;

let currentResult=defaultResult;

let logEntries = [];


function getInputValue(){
    return parseInt(userInput.value)
}
function btnNav(operator,firstValue,inputValue){
    const calcDes = `${firstValue} ${operator} ${inputValue}`;
    outputResult(currentResult,calcDes);
}

function writeToLog(
    operationIdentifier,
    previousResult,
    inputNumber,
    finalResult){
    const logEntry={
        operation: operationIdentifier,
        prevResult: previousResult,
        enteredNum: inputNumber,
        result: finalResult,
       }
    logEntries.push(logEntry);
     console.log(logEntries);

}
function calculation(calcType){
    const getInput=getInputValue();
    const initialResult =currentResult;
    let mathOperator;
    if(calcType!=='add' && calcType!=='subtract' && calcType!=='multiply' && calcType!=='divide' || getInput===0){
        return ;
    }
    if(calcType==='add'){
        currentResult +=getInput;
        mathOperator= '+'
    }
    else if(calcType==='subtract'){
        currentResult-=getInput;
        mathOperator= '-'
    }
    else if(calcType==='multiply'){
        currentResult*=getInput;
        mathOperator= '*'
    }
    else if(calcType==='divide'){
        currentResult/=getInput;
        mathOperator= '/'
    }
    writeToLog(calcType,initialResult,getInput,currentResult);
    btnNav(mathOperator,initialResult,getInput);
}

function add(){
   
     calculation('add');
    
}
function subtract(){
    calculation('subtract');

}
function multiply(){
    calculation('multiply')
}
function divide(){
    calculation('divide');
}
addBtn.addEventListener('click',add);
subtractBtn.addEventListener('click',subtract);
multiplyBtn.addEventListener('click',multiply);
divideBtn.addEventListener('click',divide);





