const form = document.querySelector('.form');
// const formContents = document.querySelectorAll('.input input--text');

form.addEventListener("submit", e => {
  e.preventDefault();
  console.log(form.firstname.value);
  console.log(form.lastname.value);
  console.log(form.email.value);
  console.log(form.password.value);
});
