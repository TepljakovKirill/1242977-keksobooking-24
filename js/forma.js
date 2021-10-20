const form = document.querySelector('.ad-form');
const element = document.querySelectorAll('.ad-form__element');
const filters = document.querySelector('.map__filters');
const filter = document.querySelectorAll('.map__filter');

function activeForm() {
  form.classList.remove('ad-form--disabled');
  for (const elem of element) {
    elem.removeAttribute('disabled');
  }
  filters.classList.remove('ad-form--disabled');
  for (const elem of filter) {
    elem.removeAttribute('disabled');
  }
}

activeForm();

function disabledForm() {
  form.classList.add('ad-form--disabled');
  for (const elem of element) {
    elem.disabled;
  }
  filters.classList.add('ad-form--disabled');
  for (const elem of filter) {
    elem.disabled;
  }
}

disabledForm();
