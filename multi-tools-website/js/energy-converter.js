document.addEventListener('DOMContentLoaded', function() {
    const inputValue = document.getElementById('inputValue');
    const inputUnit = document.getElementById('inputUnit');
    const outputUnit = document.getElementById('outputUnit');
    const convertBtn = document.getElementById('convertBtn');
    const resultValue = document.getElementById('resultValue');

    const conversionRates = {
        // Base unit: joules
        'joules': 1,
        'kilojoules': 1000,
        'calories': 4.184,
        'kilocalories': 4184,
        'watt_hours': 3600,
        'kilowatt_hours': 3600000,
        'electronvolts': 1.6022e-19,
        'btu': 1055.06
    };

    function convertEnergy() {
        const value = parseFloat(inputValue.value);
        const fromUnit = inputUnit.value;
        const toUnit = outputUnit.value;

        if (isNaN(value)) {
            resultValue.textContent = 'Invalid Input';
            return;
        }

        // Convert input value to base unit (joules)
        const valueInJoules = value * conversionRates[fromUnit];

        // Convert from base unit (joules) to output unit
        const convertedValue = valueInJoules / conversionRates[toUnit];

        if (convertedValue < 1e-6 && convertedValue > 0) {
            resultValue.textContent = convertedValue.toExponential(4);
        } else {
            resultValue.textContent = convertedValue.toFixed(4);
        }
    }

    // Add event listeners
    convertBtn.addEventListener('click', convertEnergy);
    inputValue.addEventListener('input', convertEnergy);
    inputUnit.addEventListener('change', convertEnergy);
    outputUnit.addEventListener('change', convertEnergy);

    // Initial conversion on page load
    convertEnergy();
});
