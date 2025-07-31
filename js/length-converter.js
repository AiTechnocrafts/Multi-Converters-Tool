document.addEventListener('DOMContentLoaded', function() {
    const inputValue = document.getElementById('inputValue');
    const inputUnit = document.getElementById('inputUnit');
    const outputUnit = document.getElementById('outputUnit');
    const convertBtn = document.getElementById('convertBtn');
    const resultValue = document.getElementById('resultValue');

    const conversionRates = {
        // Base unit: meters
        'meters': 1,
        'kilometers': 1000,
        'centimeters': 0.01,
        'millimeters': 0.001,
        'micrometers': 0.000001,
        'nanometers': 0.000000001,
        'miles': 1609.34,
        'yards': 0.9144,
        'feet': 0.3048,
        'inches': 0.0254,
        'nautical_miles': 1852
    };

    function convertLength() {
        const value = parseFloat(inputValue.value);
        const fromUnit = inputUnit.value;
        const toUnit = outputUnit.value;

        if (isNaN(value)) {
            resultValue.textContent = 'Invalid Input';
            return;
        }

        // Convert input value to base unit (meters)
        const valueInMeters = value * conversionRates[fromUnit];

        // Convert from base unit (meters) to output unit
        const convertedValue = valueInMeters / conversionRates[toUnit];

        resultValue.textContent = convertedValue.toFixed(4); // Display with 4 decimal places
    }

    // Add event listeners
    convertBtn.addEventListener('click', convertLength);
    inputValue.addEventListener('input', convertLength);
    inputUnit.addEventListener('change', convertLength);
    outputUnit.addEventListener('change', convertLength);

    // Initial conversion on page load
    convertLength();
});
