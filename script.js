// Récupération des éléments HTML5
const contents = document.querySelectorAll(".content");
const listItems = document.querySelectorAll("nav ul li");

// Déclarattion de la fonction hideAllContents qui va permettre de retirer la classe show
const hideAllContents = () => {
  contents.forEach((content) => content.classList.remove("show"));
};

// Déclaration de la fonctionhideAllItems qui va permettre de retirer la classe active
const hideAllItems = () => {
  listItems.forEach((item) => item.classList.remove("active"));
};

listItems.forEach((item, index) => {
  // Ecoute de l'événement "click"
  item.addEventListener("click", () => {
    // Appel de la fonction hideAllContents
    hideAllContents();
    // Appel de la fonction hide AllItems
    hideAllItems();

    // Ajout de la classe active
    item.classList.add("active");
    // Ajout de la classe show
    contents[index].classList.add("show");
  });
});
