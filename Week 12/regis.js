document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Clear previous error messages
    document.getElementById("usernameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";

    let isValid = true;

    // Validate Username
    const username = document.getElementById("username").value;
    if (username.length < 3) {
      isValid = false;
      document.getElementById("usernameError").textContent =
        "Username must be at least 3 characters long.";
    }

    // Validate Email
    const email = document.getElementById("email").value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      isValid = false;
      document.getElementById("emailError").textContent =
        "Please enter a valid email address.";
    }
    // Validate Password
    const password = document.getElementById("password").value;
    if (password.length < 6) {
      isValid = false;
      document.getElementById("passwordError").textContent =
        "Password must be at least 6 characters long.";
    }

    if (isValid) {
      alert("Registration successful!");
      // Here you can proceed with form submission or further processing
    }
  });
