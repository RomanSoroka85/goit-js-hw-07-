const input = document.querySelector("#validation-input");
input.addEventListener("blur", () => {
  console.log(input.value.length);
  console.dir(input.dataset.length);
  const inputValue = input.value.length;
  const dataValue = input.dataset.length;

  if (inputValue === +dataValue) {
    input.classList.add("valid");
    input.classList.remove("invalid");
    console.dir(input);
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
    console.dir(input);
  }
});
