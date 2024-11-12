const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");
nameInput.addEventListener("input", () => {
        // Verificăm dacă input-ul este gol
        if (nameInput.value.trim() === "") {
            nameOutput.textContent = "Anonymous";
        } else {
            nameOutput.textContent = nameInput.value;
        }
});
console.log(nameInput);