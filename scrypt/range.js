const sliderValue = document.querySelector(".range-span");
const inputSlider = document.querySelector(".land-area");

inputSlider.oninput = () => {
  let value = inputSlider.value;
  sliderValue.textContent = value;

  sliderValue.classList.add("show");
};

inputSlider.onblur = () => {
  sliderValue.classList.remove("show");
};

const sliderValue2 = document.querySelector(".range-span-2");
const inputSlider2 = document.querySelector(".house-area");

inputSlider2.oninput = () => {
  let value2 = inputSlider2.value;
  sliderValue2.textContent = value2;

  sliderValue2.classList.add("show");
};

inputSlider2.onblur = () => {
  sliderValue2.classList.remove("show");
};

const sliderValue3 = document.querySelector(".range-span-3");
const inputSlider3 = document.querySelector(".pool-area");

inputSlider3.oninput = () => {
  let value3 = inputSlider3.value;
  sliderValue3.textContent = value3;

  sliderValue3.classList.add("show");
};

inputSlider3.onblur = () => {
  sliderValue3.classList.remove("show");
};
