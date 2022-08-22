// const buttonRef = document.querySelector(".change-color");
// const spanEl = document.querySelector(".color");
// buttonRef.addEventListener("click", () => {
//   spanEl.textContent = getRandomHexColor();
//   document.body.setAttribute(
//     "style",
//     "background-color: " + spanEl.textContent
//   );
// });

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const body = document.body;
const span = document.querySelector(".color");
const chgBtn = document.querySelector(".change-color");
chgBtn.addEventListener("click", changeBgnd);
function changeBgnd() {
  const ourColor = getRandomHexColor();
  body.style.backgroundColor = `${ourColor}`;
  span.textContent = `${ourColor}`;
}
