import modals from "./modules/modals";
import sliders from "./modules/sliders";

window.addEventListener("DOMContentLoaded", () => {
  "use strict";

  modals(); // Запуск модуля модальных окон
  sliders(".feedback-slider-item", "", ".main-prev-btn", ".main-next-btn"); // Запуск модуля слайдера
  sliders(".main-slider-item", "vertical");
});
