const pinGenerateBtn = document.getElementById('pin-generate-btn');
pinGenerateBtn.addEventListener('click', function() {
    const randomNumber = Math.floor(1000 + Math.random() * 9000);
    document.getElementById('pin-shower').value = randomNumber;
})


// const oneBtn = document.getElementById('one').addEventListener('click', function() {
    
// })

function numberBtnFunction(btnId) {
    let btnIdStr = btnId.toString();
    let calculatorDisplay = document.getElementById('calculator-display');
    let prevCalculatorDisplayValue = calculatorDisplay.value;
    document.getElementById('calculator-display').value = prevCalculatorDisplayValue + btnIdStr;
}

function clearDisplay() {
    document.getElementById('calculator-display').value = "";
} 

document.getElementById('submit-btn').addEventListener('click', function() {
    const valueOfPinShower = document.getElementById('pin-shower').value;
    const valueOfCalculatorDisplay = document.getElementById('calculator-display').value;
    const successNotice = document.getElementById('success-notice');
    const errorNotice = document.getElementById('error-notice');
    if (valueOfPinShower == valueOfCalculatorDisplay) {
        successNotice.style.display = 'block';
        errorNotice.style.display = 'none';   
    } else {
        errorNotice.style.display = 'block';
        successNotice.style.display = 'none';
        let actionTry = document.getElementById('action-try').innerText;
        let actionTryNumber = parseInt(actionTry);
        actionTryNumber = actionTryNumber - 1;
        if (actionTryNumber >= 0) {
            document.getElementById('action-try').innerText = actionTryNumber;
        }

        if (actionTryNumber == 0 ) {
            document.getElementById('submit-btn').disabled = true;
        }
    }

    if (successNotice.style.display == 'block') {
        document.getElementById('calculator-display').value = "";
        document.getElementById('pin-shower').value = "";
    }
    
})

function deleteLastCharacter() {
    const calculatorDisplayValue = document.getElementById('calculator-display').value;
    const removedValue = calculatorDisplayValue.slice(0, calculatorDisplayValue.length - 1);
    document.getElementById('calculator-display').value = removedValue;
    console.log(calculatorDisplayValue);
}