const div = document.querySelector("#controls");
console.dir(div);
const input = document.querySelector("#controls input");
const buttonLeft = document.querySelector('[data-action="render"]');
console.log(buttonLeft);
const buttonRight = document.querySelector('[data-action="destroy"]');
console.log(buttonRight);
const divBoxes = document.querySelector("#boxes");
console.log(divBoxes);

input.addEventListener("input", () => {
  const amount = input.value;
  console.log(amount);
  console.dir(input);
});
let red = Math.floor(Math.random() * 256);
let green = Math.floor(Math.random() * 256);
let blue = Math.floor(Math.random() * 256);
let rgb = `rgb(${red},${green},${blue})`;
console.log(rgb);

function createBoxes(amount) {
  let bazeSize = 30;
  //   const box = document.createElement("div");
  //   box.style.width = size + "px";
  //   box.style.height = size + "px";
  //  box.style.color =
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    let size = bazeSize + i * 10;
    box.style.width = size + "px";
    box.style.height = size + "px";
    box.style.backgroundColor = rgb;
    divBoxes.append(box);
  }
}
buttonLeft.addEventListener("click", () => {
  divBoxes.innerHTML = "";
  createBoxes(input.value);
});
buttonRight.addEventListener("click", () => {
  divBoxes.innerHTML = "";
});
