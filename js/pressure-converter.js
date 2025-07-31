document.addEventListener('DOMContentLoaded', function() {
    const inputValue = document.getElementById('inputValue');
    const inputUnit = document.getElementById('inputUnit');
    const outputUnit = document.getElementById('outputUnit');
    const convertBtn = document.getElementById('convertBtn');
    const resultValue = document.getElementById('resultValue');

    const conversionRates = {
        // Base unit: pascals
        'pascals': 1,
        'kilopascals': 1000,
        'megapascals': 1000000,
        'bars': 100000,
        'millibars': 100,
        'psi': 6894.76,
        'atmospheres': 101325,
        'torr': 133.322
    };

    function convertPressure() {
        const value = parseFloat(inputValue.value);
        const fromUnit = inputUnit.value;
        const toUnit = outputUnit.value;

        if (isNaN(value)) {
            resultValue.textContent = 'Invalid Input';
            return;
        }

        // Convert input value to base unit (pascals)
        const valueInPascals = value * conversionRates[fromUnit];

        // Convert from base unit (pascals) to output unit
        const convertedValue = valueInPascals / conversionRates[toUnit];

        if (convertedValue < 1e-6 && convertedValue > 0) {
            resultValue.textContent = convertedValue.toExponential(4);
        } else {
            resultValue.textContent = convertedValue.toFixed(4);
        }
    }

    // Add event listeners
    convertBtn.addEventListener('click', convertPressure);
    inputValue.addEventListener('input', convertPressure);
    inputUnit.addEventListener('change', convertPressure);
    outputUnit.addEventListener('change', convertPressure);

    // Initial conversion on page load
    convertPressure();
});
