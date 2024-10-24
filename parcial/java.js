
function calculate(operation) {

    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        result =  " ingrese números válidos.";
    } else {
        
        switch (operation) {
            case 'sum':
                result = num1 + num2;
                break;
            case 'subtract':
                result = num1 - num2;
                break;
            case 'multiply':
                result = num1 * num2;
                break;
            case 'divide':
                result = num2 !== 0 ? num1 / num2 : "no se puede entre cero";
     
        }
    }

    document.getElementById('result').textContent = "Resultado: " + result;
}
