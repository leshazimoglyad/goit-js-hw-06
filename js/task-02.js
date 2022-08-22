const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsEl = document.querySelector(`#ingredients`);
const navItemEl = ingredients.map((ingredient) => {
  const navItemEl = document.createElement(`li`);
  navItemEl.classList.add(`site-nav__item`);
  navItemEl.textContent = ingredient;

  return navItemEl;
});
console.log(ingredientsEl);
console.log(navItemEl);
ingredientsEl.append(...navItemEl);
