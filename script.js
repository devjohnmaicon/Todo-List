const button = document.querySelector(".button");
const text = document.querySelector(".text");
const list = document.querySelector(".list");

button.addEventListener("click", () => {
  let newLi = document.createElement("li");
  newLi.innerHTML = `<input type="radio" > ${text.value} `;

  if (text.value) {
    list.prepend(newLi);
    text.value = "";
  }
});
