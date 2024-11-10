const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.getElementById("ingredients");

ingredients.forEach(ingredient => {
  const li = document.createElement("li"); // Creează un element <li>
  li.textContent = ingredient;             // Setează conținutul text al <li> la numele ingredientului
  li.classList.add("item");                // Adaugă clasa "item" la <li>
  ingredientsList.appendChild(li);         // Adaugă elementul <li> la lista <ul>
});


