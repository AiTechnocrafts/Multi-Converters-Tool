document.addEventListener('DOMContentLoaded', function() {
    const inputValue = document.getElementById('inputValue');
    const inputUnit = document.getElementById('inputUnit');
    const outputUnit = document.getElementById('outputUnit');
    const convertBtn = document.getElementById('convertBtn');
    const resultValue = document.getElementById('resultValue');

    // Conversion factors to a base of Liters per 100 km (L/100km)
    const toL100km = {
        'mpg_us': 235.215,
        'mpg_uk': 282.481,
        'l_100km': 1,
        'km_l': 100
    };

    function convertFuelEfficiency() {
        const value = parseFloat(inputValue.value);
        const fromUnit = inputUnit.value;
        const toUnit = outputUnit.value;

        if (isNaN(value) || value === 0) {
            resultValue.textContent = '0';
            if (isNaN(value)) {
                resultValue.textContent = 'Invalid Input';
            }
            return;
        }

        let valueInL100km;

        // Convert input value to base unit (L/100km)
        if (fromUnit === 'mpg_us' || fromUnit === 'mpg_uk') {
            valueInL100km = toL100km[fromUnit] / value;
        } else if (fromUnit === 'km_l') {
            valueInL100km = toL100km[fromUnit] / value;
        } else { // fromUnit is 'l_100km'
            valueInL100km = value;
        }

        let convertedValue;

        // Convert from base unit (L/100km) to output unit
        if (toUnit === 'mpg_us' || toUnit === 'mpg_uk') {
            convertedValue = toL100km[toUnit] / valueInL100km;
        } else if (toUnit === 'km_l') {
            convertedValue = toL100km[toUnit] / valueInL100km;
        } else { // toUnit is 'l_100km'
            convertedValue = valueInL100km;
        }

        resultValue.textContent = convertedValue.toFixed(3); // Display with 3 decimal places
    }

    // Add event listeners
    convertBtn.addEventListener('click', convertFuelEfficiency);
    inputValue.addEventListener('input', convertFuelEfficiency);
    inputUnit.addEventListener('change', convertFuelEfficiency);
    outputUnit.addEventListener('change', convertFuelEfficiency);

    // Initial conversion on page load
    convertFuelEfficiency();
});
