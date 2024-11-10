document.addEventListener('DOMContentLoaded', () => {
    // Selectăm lista de categorii
    const categoriesList = document.querySelectorAll('#categories .item');

    // Afișăm numărul total de categorii
    console.log('Number of categories:', categoriesList.length);

    // Iterăm prin fiecare element din lista de categorii
    categoriesList.forEach(category => {
        // Selectăm titlul categoriei (elementul <h2>)
        const categoryTitle = category.querySelector('h2').textContent;

        // Selectăm toate elementele <li> din această categorie
        const categoryElements = category.querySelectorAll('ul li').length;

        // Afișăm titlul și numărul de elemente din categorie
        console.log('Category:', categoryTitle);
        console.log('Elements:', categoryElements);
    });
});
