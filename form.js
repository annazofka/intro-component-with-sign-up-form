const form = document.querySelector("#form");

const emailInput = document.querySelector("#email");
// const error = email.nextElementSibling;
const errorOutput = document.querySelector("#errorOutput");

const emailPattern =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

// is the field empty? If not, is it well formatted?
// kod nie potrzebny - nie chcemy robić validacji przy pierwszym załadowaniu strony
// window.addEventListener("load", () => {
//   const isValid = emailPattern.test(emailInput.value);
//   emailInput.className = isValid ? "valid" : "invalid";
// });

// when user types something in

emailInput.addEventListener("input", () => {
  const isValid = emailPattern.test(emailInput.value);
  if (isValid) {
    emailInput.className = "valid";
    errorOutput.textContent = "";
    errorOutput.className = "";
  } else {
    errorOutput.className = "error";
    emailInput.className = "invalid";
  }
});

// when the user tries to submit
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const isValid = emailPattern.test(emailInput.value);

  if (isValid) {
    emailInput.className = "valid";
    errorOutput.textContent = "";
    errorOutput.className = "error";
  } else {
    emailInput.className = "invalid";
    errorOutput.textContent = "This is not a valid email address";
    errorOutput.className = "error active";
  }

  // const formContents = document.querySelectorAll('.input input--text');
  // const feedbackUserName = document.querySelector('.feedback--firstname');

  // validation:
  // const firstName = form.firstname.value;
  // const firstNamePattern = /^[a-z A-Z]{1,}$/;
  // if(firstNamePattern.test(firstName)){
  //   feedbackUserName.textContent = "ok";
  // } else {
  //   feedbackUserName.textContent = "First name can't be empty";
  // }

  // const lastName = form.lastname.value;
  // const lastNamePattern = /^[a-z A-Z]{1,}$/;

  // const email = form.email.value;
  // const emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

  // const password = form.password.value;
  // const passwordPattern = /^.{6,12}$/;
});
