let currentNumber = "";    // Armazena o número atual
let previousNumber = "";   // Armazena o número anterior
let operation = null;      // Armazena a operação selecionada

function appendNumber(number) {
    currentNumber += number;
    updateDisplay(currentNumber);
}

function setOperation(op) {
    if (currentNumber === "") return;
    if (previousNumber !== "") {
        calculateResult();
    }
    operation = op;
    previousNumber = currentNumber;
    currentNumber = "";
}

function calculateResult() {
    let result;
    const prev = parseFloat(previousNumber);
    const current = parseFloat(currentNumber);
    
    if (isNaN(prev) || isNaN(current)) return;

    switch (operation) {
        case "+":
            result = prev + current;
            break;
        case "-":
            result = prev - current;
            break;
        case "*":
            result = prev * current;
            break;
        case "/":
            result = current !== 0 ? prev / current : "Erro";
            break;
        default:
            return;
    }

    currentNumber = result.toString();
    operation = null;
    previousNumber = "";
    updateDisplay(currentNumber);
}

function clearDisplay() {
    currentNumber = "";
    previousNumber = "";
    operation = null;
    updateDisplay("0");
}

function updateDisplay(value) {
    document.getElementById("display").value = value;
}

// Inicializa o display com 0
clearDisplay();
