const bodyCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${bodyCategories.length} `);

const categoriesArray = [...bodyCategories]
  .map(
    (categories) =>
      `Category: ${categories.children[0].textContent} 
Elements: ${categories.children[1].children.length}`
  )
  .join("\n");
console.log(categoriesArray);
