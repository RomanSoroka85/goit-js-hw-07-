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
const getRandomRgbNum = () => Math.floor(Math.random() * 256);
function createBoxes(amount) {
  let bazeSize = 20;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");

    let size = bazeSize + i * 10;
    box.style.width = size + "px";
    box.style.height = size + "px";
    const red = getRandomRgbNum();
    const green = getRandomRgbNum();
    const blue = getRandomRgbNum();
    box.style.backgroundColor = `rgb(${red},${green},${blue})`;
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
