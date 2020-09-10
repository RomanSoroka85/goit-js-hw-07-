const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];
const ul = document.querySelector("#ingredients");
console.dir(ul);
ingredients.forEach(element => {
    const newItem = document.createElement('li');
    // console.log(newItem);
     newItem.textContent = element;
     console.log(newItem);
     ul.append(newItem);
     });

//   const task2 = document.createElement()