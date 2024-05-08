const submit = document.getElementById("submit");
const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateForm();
})
const validateEmail = (email) => {
  
  var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};
const validateForm = () => {
  const email = document.getElementById("email");
  const isEmailValid = validateEmail(email.value);
  if (!isEmailValid) {
    alert("Invalid Email");
  } else {
    alert("Thank You Your Form Has Been Submitted");
  }
} 