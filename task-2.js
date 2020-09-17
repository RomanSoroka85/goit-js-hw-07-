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
const listItems = ingredients.map((element) => {
  const newItem = document.createElement("li");
  newItem.textContent = element;
  console.log(newItem);
  return newItem;
});
ul.append(... listItems);
