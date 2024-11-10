let counterValue = 0;
const valueDisplay = document.getElementById("value");
const decrementButton = document.querySelector('button[data-action="decrement"]');
const incrementButton = document.querySelector('button[data-action="increment"]');

// Funcție pentru a actualiza afișajul contorului
function updateDisplay() {
  valueDisplay.textContent = counterValue;
}

// Adăugăm handler-ul de click pentru butonul de decrementare
decrementButton.addEventListener("click", () => {
  counterValue -= 1;
  updateDisplay(); // Actualizăm afișajul
});
