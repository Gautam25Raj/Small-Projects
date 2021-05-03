const btn = document.querySelector("#btn");
const cross = document.querySelector("#cross");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

const openModal = function () {
  modal.classList.add("active");;
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.remove("active");
  overlay.classList.add("hidden");
};

btn.addEventListener("click", openModal);
cross.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
  }
});


