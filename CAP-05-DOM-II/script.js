function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    if (isNaN(weight) || isNaN(height) || height <= 0 || weight <= 0) {
        document.getElementById('result').textContent = "Please enter valid weight and height.";
        return;
    }

    const bmi = weight / (height * height);

    let result = '';
    if (bmi <= 18.4) {
        result = 'Underweight';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        result = 'Normal Weight';
    } else if (bmi >= 25 && bmi <= 29.9) {
        result = 'Overweight';
    } else {
        result = 'Obese';
    }

    document.getElementById('result').textContent = `BMI: ${bmi.toFixed(2)} - ${result}`;
}    