function bmi(weight, height) {
  const bmi = weight / Math.pow(height, 2)
  return bmi <= 18.5 ? "Underweight" : bmi <= 25.0 ? "Normal" : bmi <= 30.0 ? "Overweight" : "Obese";
}

function bmi(weight, height) {
  const $ = weight / height**2;
  return $ <= 18.5 ? 'Underweight' : $ <= 25.0 ? 'Normal' : $ <= 30.0 ? 'Overweight' : 'Obese';
}
function bmi(weight, height) {
  const bmi = weight / (height * height);
  if(bmi <= 18.5) return "Underweight";
  if(bmi <= 25) return "Normal";
  if(bmi <= 30) return "Overweight";
  return "Obese";
}
