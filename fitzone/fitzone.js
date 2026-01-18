function calculateBMI() {
  const height = document.getElementById("height").value / 100;
  const weight = document.getElementById("weight").value;
  const result = document.getElementById("bmi-result");

  if (!height || !weight) {
    result.innerHTML = "Моля, въведете височина и тегло.";
    return;
  }

  const bmi = (weight / (height * height)).toFixed(1);

  let status = "";
  if (bmi < 18.5) status = "Под нормата";
  else if (bmi < 25) status = "Здравословно";
  else if (bmi < 30) status = "Над нормата";
  else status = "Много над нормата";

  result.innerHTML = `BMI: <strong>${bmi}</strong> – ${status}`;
}


document.getElementById("registerForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirm = document.getElementById("confirmPassword").value;
  const message = document.getElementById("formMessage");

  if (password.length < 6) {
    message.style.color = "red";
    message.textContent = "Паролата трябва да е поне 6 символа.";
    return;
  }

  if (password !== confirm) {
    message.style.color = "red";
    message.textContent = "Паролите не съвпадат.";
    return;
  }

  message.style.color = "green";
  message.textContent = "Регистрацията е успешна (frontend demo).";
});
