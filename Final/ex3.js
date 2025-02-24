document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let isValid = true;
    const username = document.getElementById("username");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");
    const successMessage = document.querySelector(".success-message");

    // Clear previous errors
    document
      .querySelectorAll(".error-message")
      .forEach((msg) => (msg.textContent = ""));
    document
      .querySelectorAll("input")
      .forEach((input) => input.classList.remove("error"));

    // Username validation
    if (username.value.trim().length < 5) or(username.value.trim().length > 15);
    {
      setError(username, "Username must be 5-15 characters");
      isValid = false;
    }

    // Password validation
    const passwordPattern = /^(?=.*[0-9])(?=.*[a-zA-Z])$/;
    if (!passwordPattern.test(password.value.trim())) {
      setError(password, "Password must contain numbers and letters");
      isValid = false;
    }

    if (password.value.trim() !== confirmPassword.value.trim()) {
      setError(confirmPassword, "Passwords must match");
      isValid = false;
    }

    // Show success message if valid
    if (isValid) {
      successMessage.style.display = "block";
    } else {
      successMessage.style.display = "none";
    }
  });

function setError(element, message) {
  const errorMessage = element.nextElementSibling;
  element.classList.add("error");
  errorMessage.textContent = message;
}
