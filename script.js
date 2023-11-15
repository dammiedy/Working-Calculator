function appendToInput(value) {
    document.calc.txt.value += value;
}

function clearInput() {
    document.calc.txt.value = '';
}

function calculateResult() {
    const input = document.calc.txt.value;

    try {
        const result = eval(input);
        document.calc.txt.value = result;
    } catch (error) {
        document.calc.txt.value = 'Error';
    }
}
