function validate() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errorMessage = document.getElementById("errorMessage");
  errorMessage.textContent = "";

  if (username === "") {
    errorMessage.textContent = "Username is required.";
    return false;
  }
  if (password === "") {
    errorMessage.textContent = "Password is required.";
    return false;
  }
  if (username.length < 8) {
    errorMessage.textContent = "User name must be greater than 8 letters.";
    return false;
  }
  if (password.length < 8 && password.length > 12) {
    errorMessage.textContent =
      "Enter the password from 8 to 12 characters only.";
    return;
  }
  if (!/\d/.test(password)) {
    errorMessage.textContent = "Password must contain at least one digit.";
    return false;
  }
  if (!/[!@#$%^&*]/.test(password)) {
    errorMessage.textContent =
      "Password must contain at least one special character from [!@#$%^&*].";
    return false;
  }
  const repeatPassword = document.getElementById("repeat-password").value;
  if (repeatPassword != password) {
    errorMessage.textContent = "Enter the same password and repeat-password";
    return false;
  }
  const age = Number.parseInt(document.getElementById("age").value);
  if (age < 18) {
    errorMessage.textContent = "Not Allowed age under 18";
    return false;
  }
  const enrollmentNumber = document.getElementById("enrollment-number").value;
  if (isNaN(enrollmentNumber) || enrollmentNumber.toString().length != 11) {
    console.log("Enter the correct enrollment number");
    return false;
  }

  // Email validation

  const email = document.getElementById("email").value;
  if (email == "") {
    errorMessage.textContent = "Enter the email";
    return false;
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    console.log("email is not valid");
    return false;
  }
  alert("Login successful!");
}
