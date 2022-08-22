// const form = document.querySelector(`.login-form`);
// form.addEventListener(`submit`, onFormdata);

// function onFormdata(event) {
//   event.preventDefault();

//   const formElements = event.currentTarget.elements;
//   console.dir(formElements);

//   const email = formElements.email.value;
//   const password = formElements.password.value;

//   if (email.value === "" || password.value === "") {
//     return alert("Заполните форму");
//     console.log({ email: email.value, password: password.value });
//   }
// }
const checkForm = document.querySelector(".login-form");
console.log(checkForm);

checkForm.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const data = {};
  formData.forEach((name, value) => {
    if (!name || !value) {
      alert("Заповніть всі поля ");
    } else {
      data[value] = name;
    }
  });
  if (data.email && data.password) {
    console.log(data);
    event.currentTarget.reset();
  }
}
