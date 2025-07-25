document.addEventListener('DOMContentLoaded', function() {
    const inputValue = document.getElementById('inputValue');
    const inputUnit = document.getElementById('inputUnit');
    const outputUnit = document.getElementById('outputUnit');
    const convertBtn = document.getElementById('convertBtn');
    const resultValue = document.getElementById('resultValue');

    const conversionRates = {
        // Base unit: kilograms
        'kilograms': 1,
        'grams': 0.001,
        'milligrams': 0.000001,
        'metric_tons': 1000,
        'pounds': 0.453592,
        'ounces': 0.0283495,
        'stones': 6.35029,
        'short_tons': 907.185,
        'long_tons': 1016.05
    };

    function convertWeight() {
        const value = parseFloat(inputValue.value);
        const fromUnit = inputUnit.value;
        const toUnit = outputUnit.value;

        if (isNaN(value)) {
            resultValue.textContent = 'Invalid Input';
            return;
        }

        // Convert input value to base unit (kilograms)
        const valueInKilograms = value * conversionRates[fromUnit];

        // Convert from base unit (kilograms) to output unit
        const convertedValue = valueInKilograms / conversionRates[toUnit];

        resultValue.textContent = convertedValue.toFixed(4); // Display with 4 decimal places
    }

    // Add event listeners
    convertBtn.addEventListener('click', convertWeight);
    inputValue.addEventListener('input', convertWeight);
    inputUnit.addEventListener('change', convertWeight);
    outputUnit.addEventListener('change', convertWeight);

    // Initial conversion on page load
    convertWeight();
});
