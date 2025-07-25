document.addEventListener('DOMContentLoaded', function() {
    const inputValue = document.getElementById('inputValue');
    const inputUnit = document.getElementById('inputUnit');
    const outputUnit = document.getElementById('outputUnit');
    const convertBtn = document.getElementById('convertBtn');
    const resultValue = document.getElementById('resultValue');

    const conversionRates = {
        // Base unit: liters
        'liters': 1,
        'milliliters': 0.001,
        'cubic_meters': 1000,
        'cubic_centimeters': 0.001,
        'cubic_feet': 28.3168,
        'cubic_inches': 0.0163871,
        'gallons_us': 3.78541,
        'quarts_us': 0.946353,
        'pints_us': 0.473176,
        'cups_us': 0.236588,
        'fluid_ounces_us': 0.0295735,
        'gallons_uk': 4.54609,
        'quarts_uk': 1.13652,
        'pints_uk': 0.568261,
        'fluid_ounces_uk': 0.0284131
    };

    function convertVolume() {
        const value = parseFloat(inputValue.value);
        const fromUnit = inputUnit.value;
        const toUnit = outputUnit.value;

        if (isNaN(value)) {
            resultValue.textContent = 'Invalid Input';
            return;
        }

        // Convert input value to base unit (liters)
        const valueInLiters = value * conversionRates[fromUnit];

        // Convert from base unit (liters) to output unit
        const convertedValue = valueInLiters / conversionRates[toUnit];

        resultValue.textContent = convertedValue.toFixed(4); // Display with 4 decimal places
    }

    // Add event listeners
    convertBtn.addEventListener('click', convertVolume);
    inputValue.addEventListener('input', convertVolume);
    inputUnit.addEventListener('change', convertVolume);
    outputUnit.addEventListener('change', convertVolume);

    // Initial conversion on page load
    convertVolume();
});
