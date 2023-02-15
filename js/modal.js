const refs = {
  openModalBtn: document.querySelector("[data-modal-open]"),
  closeModalBtn: document.querySelector("[data-modal-close]"),
  backdrop: document.querySelector(".js-backdrop"),
};

refs.openModalBtn.addEventListener("click", openModal);
refs.closeModalBtn.addEventListener("click", closeModal);
refs.backdrop.addEventListener("click", onBackdropClick);

function openModal() {
  window.addEventListener("keydown", onEscKeyPress);
  document.body.classList.add("modal-open");
  refs.backdrop.classList.remove("is-hidden");
}

function closeModal() {
  window.removeEventListener("keydown", onEscKeyPress);
  document.body.classList.remove("modal-open");
  refs.backdrop.classList.add("is-hidden");
}

function onBackdropClick(e) {
  if (e.target === e.currentTarget) {
    closeModal();
  }
}

function onEscKeyPress(e) {
  if (e.code === "Escape") {
    closeModal();
  }
}
