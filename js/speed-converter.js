document.addEventListener('DOMContentLoaded', function() {
    const inputValue = document.getElementById('inputValue');
    const inputUnit = document.getElementById('inputUnit');
    const outputUnit = document.getElementById('outputUnit');
    const convertBtn = document.getElementById('convertBtn');
    const resultValue = document.getElementById('resultValue');

    const conversionRates = {
        // Base unit: meters per second (m/s)
        'meters_per_second': 1,
        'kilometers_per_hour': 1 / 3.6, // 1 km/h = 1/3.6 m/s
        'miles_per_hour': 0.44704, // 1 mph = 0.44704 m/s
        'feet_per_second': 0.3048, // 1 ft/s = 0.3048 m/s
        'knots': 0.514444, // 1 knot = 0.514444 m/s
        'mach': 343 // Mach 1 at sea level (approx. 343 m/s)
    };

    function convertSpeed() {
        const value = parseFloat(inputValue.value);
        const fromUnit = inputUnit.value;
        const toUnit = outputUnit.value;

        if (isNaN(value)) {
            resultValue.textContent = 'Invalid Input';
            return;
        }

        // Convert input value to base unit (meters per second)
        const valueInMetersPerSecond = value * conversionRates[fromUnit];

        // Convert from base unit (meters per second) to output unit
        const convertedValue = valueInMetersPerSecond / conversionRates[toUnit];

        resultValue.textContent = convertedValue.toFixed(4); // Display with 4 decimal places
    }

    // Add event listeners
    convertBtn.addEventListener('click', convertSpeed);
    inputValue.addEventListener('input', convertSpeed);
    inputUnit.addEventListener('change', convertSpeed);
    outputUnit.addEventListener('change', convertSpeed);

    // Initial conversion on page load
    convertSpeed();
});
