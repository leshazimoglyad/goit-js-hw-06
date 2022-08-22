// let inputEl = (document.getElementById("validation-input").onblur =
//   function () {
//     console.log(this.value.length);
//     if (this.getAttribute("data-length") > this.value.length) {
//       this.classList.remove("valid");
//       this.classList.add("invalid");
//     } else {
//       this.classList.remove("invalid");
//       this.classList.add("valid");
//     }
//   });
const input = document.querySelector(`#validation-input`);

input.addEventListener(`blur`, onBlur);

function onBlur(a) {
  const inp = a.currentTarget;
  const inpLength = Number(inp.dataset.length);

  if (inp.value.length === inpLength) {
    inp.classList.remove(`invalid`);
    inp.classList.add(`valid`);
  } else {
    inp.classList.remove(`valid`);
    inp.classList.add(`invalid`);
  }
}
