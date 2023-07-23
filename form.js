const form = document.querySelector("#form");

const firstNameInput = document.querySelector("#firstname");
const firstNameErrorOutput = document.querySelector("#firstNameErrorOutput");

const lastNameInput = document.querySelector("#lastname");
const lastNameErrorOutput = document.querySelector("#lastNameErrorOutput");

const emailInput = document.querySelector("#email");
const errorOutput = document.querySelector("#errorOutput");

const passwordInput = document.querySelector("#password");
const passwordErrorOutput = document.querySelector("#passwordErrorOutput");

const firstNamePattern = /^[a-z A-Z]{1,}$/;
const lastNamePattern = /^[a-z A-Z]{1,}$/;
const emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const passwordPattern = /^.{6,12}$/;


const validateFirstName = () => {
  const isValid = firstNamePattern.test(firstNameInput.value);
  if (isValid) {
    firstNameInput.classList.replace("invalid", "valid");
    firstNameErrorOutput.classList.add("hide");
  } else {
    firstNameInput.classList.replace("valid", "invalid");
    firstNameErrorOutput.classList.remove("hide");
  }
};

firstNameInput.addEventListener("input", validateFirstName);

const validateLastName = () => {
  const isValid = lastNamePattern.test(lastNameInput.value);
  if (isValid) {
    lastNameInput.classList.replace("invalid", "valid");
    lastNameErrorOutput.classList.add("hide");
  } else {
    lastNameInput.classList.replace("valid", "invalid");
    lastNameErrorOutput.classList.remove("hide");
  }
};

lastNameInput.addEventListener("input", validateLastName);

const validateEmail = () => {
  const isValid = emailPattern.test(emailInput.value);
  if (isValid) {
    emailInput.classList.replace("invalid", "valid");
    errorOutput.classList.add("hide");
  } else {
    emailInput.classList.replace("valid", "invalid");
    errorOutput.classList.remove("hide");
  }
};

emailInput.addEventListener("input", validateEmail);

const validatePassword = () => {
  const isValid = passwordPattern.test(passwordInput.value);
  if (isValid) {
    passwordInput.classList.replace("invalid", "valid");
    passwordErrorOutput.classList.add("hide");
  } else {
    passwordInput.classList.replace("valid", "invalid");
    passwordErrorOutput.classList.remove("hide")
  }
};

passwordInput.addEventListener("input", validatePassword);

form.addEventListener("submit", (event) => {
  const firstNameValidationOutcome = validateLastName()
  const lastNameValidationOutcome = validateLastName()
  const emailValidationOutcome = validateEmail()
  const passwordValidationOutcome = validatePassword()

if (firstNameValidationOutcome || lastNameValidationOutcome || emailValidationOutcome || passwordValidationOutcome) {
    // {add code} to submit the form and:
    firstNameInput = ""
    lastNameInput = ""
    emailInput = ""
    passwordInput = ''
    alert("This form has been successfully submitted!");
} else {
  event.preventDefault();
}
});

