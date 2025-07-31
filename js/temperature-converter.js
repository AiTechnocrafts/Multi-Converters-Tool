document.addEventListener('DOMContentLoaded', function() {
    const inputValue = document.getElementById('inputValue');
    const inputUnit = document.getElementById('inputUnit');
    const outputUnit = document.getElementById('outputUnit');
    const convertBtn = document.getElementById('convertBtn');
    const resultValue = document.getElementById('resultValue');

    function convertTemperature() {
        const value = parseFloat(inputValue.value);
        const fromUnit = inputUnit.value;
        const toUnit = outputUnit.value;

        if (isNaN(value)) {
            resultValue.textContent = 'Invalid Input';
            return;
        }

        let valueInCelsius;

        // Convert input value to Celsius
        if (fromUnit === 'celsius') {
            valueInCelsius = value;
        } else if (fromUnit === 'fahrenheit') {
            valueInCelsius = (value - 32) * 5 / 9;
        } else if (fromUnit === 'kelvin') {
            valueInCelsius = value - 273.15;
        }

        let convertedValue;

        // Convert from Celsius to output unit
        if (toUnit === 'celsius') {
            convertedValue = valueInCelsius;
        } else if (toUnit === 'fahrenheit') {
            convertedValue = (valueInCelsius * 9 / 5) + 32;
        } else if (toUnit === 'kelvin') {
            convertedValue = valueInCelsius + 273.15;
        }

        resultValue.textContent = convertedValue.toFixed(2); // Display with 2 decimal places
    }

    // Add event listeners
    convertBtn.addEventListener('click', convertTemperature);
    inputValue.addEventListener('input', convertTemperature);
    inputUnit.addEventListener('change', convertTemperature);
    outputUnit.addEventListener('change', convertTemperature);

    // Initial conversion on page load
    convertTemperature();
});
