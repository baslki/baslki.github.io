let emailInput = document.getElementById("email_input");
let emailVerify = document.getElementById("email_verify");

emailVerify.addEventListener("change", function () {
  if (emailVerify.value != emailInput.value) {
    alert("Emails verification failed! Please try again");
    emailVerify.value = "Enter your email...";
    emailInput.value = "Enter your email...";
  }
});
