const task1 = document.getElementById("categories");
console.dir(task1);
console.log(`'В списке ${task1.childElementCount} категории'`);
const list = task1.children;
// console.log(list);
// console.log(task1.);
for (let object of list) {
    console.log(`Категория:`, object.children[0].textContent);
    console.log(`Количество элементов:`, object.children[1].children.length);
};

