(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-1-open]'),
    closeModalBtn: document.querySelector('[data-modal-1-close]'),
    modal: document.querySelector('[data-modal-1]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-2-open]'),
    closeModalBtn: document.querySelector('[data-modal-2-close]'),
    modal: document.querySelector('[data-modal-2]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-3-open]'),
    closeModalBtn: document.querySelector('[data-modal-3-close]'),
    modal: document.querySelector('[data-modal-3]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
