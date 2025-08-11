function handleLogin(event) {
  event.preventDefault();
  window.location.href = "instructor_dashboard.html";
}

// Show/hide password toggle
document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("togglePassword");
  const passwordField = document.getElementById("password");
  const icon = document.getElementById("toggleIcon");

  toggleBtn.addEventListener("click", function () {
    const isPassword = passwordField.type === "password";
    passwordField.type = isPassword ? "text" : "password";
    icon.classList.toggle("bi-eye");
    icon.classList.toggle("bi-eye-slash");
  });
});
