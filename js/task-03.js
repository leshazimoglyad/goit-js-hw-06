const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
// const imagesEl = document.querySelector(`#images`);
// const img = [...images];
// for (let el of images)
//   document
//     .querySelector(".gallery")
//     .insertAdjacentHTML(
//       "beforeEnd",
//       `<li><img src="${el.url}" alt="${el.alt}"></li>`
//     );
document.head.insertAdjacentHTML(
  "beforeend",
  // "<style>.flex-container {display: flex; flex-wrap: nowrap; flex-direction: column;}.flex-item {padding: 5px 5px 5px 5px; margin: 20px 20px 20px 20px; list-style-type: none;}</style>"
  "<style>.flex-container {display: flex; flex-wrap: wrap}.flex-item {padding: 5px 5px 5px 5px; margin: 20px 20px 20px 20px; list-style-type: none;}</style>"
);

const picGallery = document.querySelector(".gallery");
picGallery.classList.add("flex-container");
const pictArr = images.map((image) => {
  return `<li class="flex-item"><img src="${image.url}" alt="${image.alt}" width="450" height="300"></li>`;
});
picGallery.insertAdjacentHTML("afterbegin", pictArr.join(""));
