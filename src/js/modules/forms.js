// import checkNumInputs from "./checkNumInputs";

const forms = () => {
  const form = document.querySelectorAll("form"),
    inputs = document.querySelectorAll("input"),
    upload = document.querySelectorAll('[name="upload"]');

  //   checkNumInputs("input[name='user_phone']");

  const message = {
    loading: "Загрузка...",
    success: "Спасибо! Скоро мы с вами свяжемся",
    failure: "Что-то пошло не так...",
    spinner: "assets/img/spinner.gif",
    ok: "assets/img/ok.png",
    fail: "assets/img/fail.png",
  };

  const path = {
    designer: "assets/server.php",
    question: "assets/question.php",
  };

  const postData = async (url, data) => {
    let res = await fetch(url, {
      method: "POST",
      body: data,
    });
    return await res.text();
  };

  const clearInputs = () => {
    inputs.forEach((input) => {
        input.value = "";
        upload.forEach((upload) => { 
             upload.previousElementSibling.textContent = "Файл не выбран";
        })
    });
  };

  upload.forEach((item) => {
    item.addEventListener("input", () => {
      console.log(item.files[0]);
      let dots;
      const arr = item.files[0].name.split(".");

      arr[0].length > 6 ? (dots = "...") : (dots = ".");
      const name = arr[0].substring(0, 6) + dots + arr[1];
      item.previousElementSibling.textContent = name;
      console.log("name:", name);
    });
  });

  form.forEach((item) => {
    item.addEventListener("submit", (e) => {
      e.preventDefault();
      let statusMessage = document.createElement("div");
      statusMessage.classList.add("status");
      item.parentNode.appendChild(statusMessage);

      item.classList.add("animated", "fadeOutUp");
      setTimeout(() => {
        item.style.display = "none";
      }, 500);

      let statusImg = document.createElement("img");
      statusImg.setAttribute("src", message.spinner);
      statusMessage.classList.add("animated", "fadeInUp");
      statusMessage.appendChild(statusImg);

      let textMessage = document.createElement("div");
      textMessage.textContent = message.loading;
      statusMessage.appendChild(textMessage);

      const formData = new FormData(item);

      let api;
      item.closest(".popup-design") || item.classList.contains("calc_form")
        ? (api = path.designer)
        : (api = path.question);
      console.log("api:", api);

      postData(api, formData)
        .then((res) => {
          console.log("res:", res);
          statusImg.setAttribute("src", message.ok);
          textMessage.textContent = message.success;
        })
        .catch((err) => {
          console.error("err:", err);
          statusImg.setAttribute("src", message.fail);
          textMessage.textContent = message.failure;
        })
        .finally(() => {
          clearInputs();
          setTimeout(() => {
            statusMessage.remove();
            item.style.display = "block";
            item.classList.remove("fadeOutUp");
            item.classList.add("fadeInUp");
          }, 3000);
        });
    });
  });
};
export default forms;