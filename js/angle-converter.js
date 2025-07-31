document.addEventListener('DOMContentLoaded', function() {
    const inputValue = document.getElementById('inputValue');
    const inputUnit = document.getElementById('inputUnit');
    const outputUnit = document.getElementById('outputUnit');
    const convertBtn = document.getElementById('convertBtn');
    const resultValue = document.getElementById('resultValue');

    function convertAngle() {
        const value = parseFloat(inputValue.value);
        const fromUnit = inputUnit.value;
        const toUnit = outputUnit.value;

        if (isNaN(value)) {
            resultValue.textContent = 'Invalid Input';
            return;
        }

        let valueInDegrees;

        // Convert input value to base unit (degrees)
        if (fromUnit === 'degrees') {
            valueInDegrees = value;
        } else if (fromUnit === 'radians') {
            valueInDegrees = value * (180 / Math.PI);
        } else if (fromUnit === 'gradians') {
            valueInDegrees = value * 0.9;
        }

        let convertedValue;

        // Convert from base unit (degrees) to output unit
        if (toUnit === 'degrees') {
            convertedValue = valueInDegrees;
        } else if (toUnit === 'radians') {
            convertedValue = valueInDegrees * (Math.PI / 180);
        } else if (toUnit === 'gradians') {
            convertedValue = valueInDegrees / 0.9;
        }

        resultValue.textContent = convertedValue.toFixed(4); // Display with 4 decimal places
    }

    // Add event listeners
    convertBtn.addEventListener('click', convertAngle);
    inputValue.addEventListener('input', convertAngle);
    inputUnit.addEventListener('change', convertAngle);
    outputUnit.addEventListener('change', convertAngle);

    // Initial conversion on page load
    convertAngle();
});
