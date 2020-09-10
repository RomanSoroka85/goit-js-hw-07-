const refs = {
  btnDecr: document.querySelector('[data-action="decrement"]'),
  span: document.querySelector("#value"),
  btnInc: document.querySelector('[data-action="increment"]'),
};
let conterValue = refs.span.textContent;
refs.btnDecr.addEventListener("click", () => {
  if (conterValue > 0) {
    conterValue--;
    refs.span.textContent = conterValue;
  }
});
refs.btnInc.addEventListener("click", () => {
  conterValue++;
  refs.span.textContent = conterValue;
});
