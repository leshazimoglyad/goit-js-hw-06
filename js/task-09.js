const buttonRef = document.querySelector(".change-color");
const spanEl = document.querySelector(".color");
buttonRef.addEventListener("click", () => {
  spanEl.textContent = getRandomHexColor();
  document.body.setAttribute(
    "style",
    "background-color: " + spanEl.textContent
  );
});
