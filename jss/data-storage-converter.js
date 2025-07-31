document.addEventListener('DOMContentLoaded', function() {
    const inputValue = document.getElementById('inputValue');
    const inputUnit = document.getElementById('inputUnit');
    const outputUnit = document.getElementById('outputUnit');
    const convertBtn = document.getElementById('convertBtn');
    const resultValue = document.getElementById('resultValue');

    const conversionRates = {
        // Base unit: bits
        'bits': 1,
        'bytes': 8,
        'kilobits': 1000,
        'kilobytes': 8 * 1000,
        'megabits': 1000 * 1000,
        'megabytes': 8 * 1000 * 1000,
        'gigabits': 1000 * 1000 * 1000,
        'gigabytes': 8 * 1000 * 1000 * 1000,
        'terabits': 1000 * 1000 * 1000 * 1000,
        'terabytes': 8 * 1000 * 1000 * 1000 * 1000
    };

    function convertDataStorage() {
        const value = parseFloat(inputValue.value);
        const fromUnit = inputUnit.value;
        const toUnit = outputUnit.value;

        if (isNaN(value)) {
            resultValue.textContent = 'Invalid Input';
            return;
        }

        // Convert input value to base unit (bits)
        const valueInBits = value * conversionRates[fromUnit];

        // Convert from base unit (bits) to output unit
        const convertedValue = valueInBits / conversionRates[toUnit];

        resultValue.textContent = convertedValue.toFixed(4); // Display with 4 decimal places
    }

    // Add event listeners
    convertBtn.addEventListener('click', convertDataStorage);
    inputValue.addEventListener('input', convertDataStorage);
    inputUnit.addEventListener('change', convertDataStorage);
    outputUnit.addEventListener('change', convertDataStorage);

    // Initial conversion on page load
    convertDataStorage();
});
