const sliderValue = document.querySelector(".range-span");
const inputSlider = document.querySelector(".land-area");

inputSlider.oninput = () => {
  let value = inputSlider.value;
  sliderValue.textContent = value;
  sliderValue.style.left = value / 2 + "%";
  sliderValue.classList.add("show");
};

inputSlider.onblur = () => {
  sliderValue.classList.remove("show");
};
