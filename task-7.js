const input = document.querySelector("#font-size-control");
const span = document.querySelector("#text");

input.addEventListener("input", () => {
  console.log((span.style.fontSize = input.valueAsNumber + "px"));
});
