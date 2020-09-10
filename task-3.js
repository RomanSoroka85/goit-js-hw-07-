const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const ul = document.querySelector("#gallery");
console.dir(ul);
images.forEach((element) => {
  const newItem = ` <li>
    <img src="${element.url}" alt="${element.alt}" class="img">
  </li> `;
  console.log(newItem);
  ul.insertAdjacentHTML("beforeend", newItem);
});
const newItemLi = document.querySelectorAll(".img");
console.log(newItemLi);
newItemLi.forEach((element) => {
  console.dir(element);
  element.style.width = "450px";
  element.style.height = "300px";
});
ul.style.listStyle = "none";
ul.style.display = "flex";
ul.style.justifyContent = "center";
ul.style.flexDirection = "column";



//
