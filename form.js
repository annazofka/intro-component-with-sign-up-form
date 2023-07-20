const form = document.querySelector("#form");

const emailInput = document.querySelector("#email");
const errorOutput = document.querySelector("#errorOutput");

const emailPattern =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const validate = () => {
  const isValid = emailPattern.test(emailInput.value);
  if (isValid) {
    emailInput.classList.replace("invalid", "valid");
    errorOutput.classList.add("hide");
  } else {
    emailInput.classList.replace("valid", "invalid");
    errorOutput.classList.remove("hide");
  }
};

emailInput.addEventListener("input", validate);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  validate();
});
