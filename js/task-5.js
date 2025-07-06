function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const ButtonEl = document.querySelector(".change-color");
const output = document.querySelector(".color");

const onButton = (e) => {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  output.textContent = color;
};

ButtonEl.addEventListener("click", onButton);
