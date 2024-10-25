import modals from "./modules/modals";
import sliders from "./modules/sliders";
import forms from "./modules/forms";
import mask from "./modules/mask";
import checkTextInputs from "./modules/checkTextInputs";
import showMoreStyles from "./modules/showMoreStyles";

window.addEventListener("DOMContentLoaded", () => {
  "use strict";

  modals(); // Запуск модуля модальных окон
  sliders(".feedback-slider-item", "", ".main-prev-btn", ".main-next-btn"); // Запуск модуля слайдера
  sliders(".main-slider-item", "vertical");
  forms(); // Запуск модуля форм
  mask('[name="phone"]'); // Запуск модуля маски
  checkTextInputs('[name="name"]'); // check
  checkTextInputs('[name="message"]'); // check
  showMoreStyles(".button-styles", "#styles .row"); // Запуск модуля показа больше стилей для карточек
});
