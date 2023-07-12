const form = document.querySelector('form');
const email = document.querySelector('email');
const error = email.nextElementSibling;

const emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

// is the field empty? If not, is it well formatted?
window.addEventListener("load", () => {
  const isValid = email.value.length === 0 || emailPattern.test(email.value);
  email.className = isValid ? "valid" : "invalid";
});

// when user types something in

email.addEventListener("input", () => {
  const isValid = email.value.length === 0 || emailPattern.test(email.value);
  if (isValid) {
    email.className = "valid";
    error.textContent = "";
    error.className = "error";
  } else {
    email.className = "invalid";
  }
});

// when the user tries to submit
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const isValid = email.value.length === 0 || emailPattern.test(email.value);
  if(!isValid) {
    email.className = "invalid";
    error.textContent = "This is not a valid email address";
    error.className = "error active";
  } else {
    email.className = "valid";
    error.textContent = "";
    error.className = "error";
  };
  
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

