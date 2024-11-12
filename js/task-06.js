const validationInput = document.getElementById("validation-input");

validationInput.addEventListener("blur", () => {
    const requiredLength = Number(validationInput.dataset.length);
  
  if (validationInput.value.length === requiredLength) {
    validationInput.classList.add("valid");
    validationInput.classList.remove("invalid");
  } else {
    validationInput.classList.add("invalid");
    validationInput.classList.remove("valid");
  }
});
console.log(validationInput);