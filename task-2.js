const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];
const ul = document.querySelector("#ingredients");
console.dir(ul);
ingredients.map((element) => {
  const newItem = document.createElement("li");
  newItem.textContent = element;
  console.log(newItem);
  ul.append(newItem);
});
