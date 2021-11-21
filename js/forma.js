const form = document.querySelector('.ad-form');
const element = document.querySelectorAll('.ad-form__element');
const filters = document.querySelector('.map__filters');
const filter = document.querySelectorAll('.map__filter');

const activeFilter = () => {
  filters.classList.remove('ad-form--disabled');
  for (const elem of filter) {
    elem.removeAttribute('disabled');
  }
};

const getDisablingFilter = () => {
  filters.classList.add('ad-form--disabled');
  for (const elem of filter) {
    elem.disabled;
  }
};

const getActivateForm = () => {
  form.classList.remove('ad-form--disabled');
  for (const elem of element) {
    elem.removeAttribute('disabled');
  }
};

const getDisabledForm = () => {
  form.classList.add('ad-form--disabled');
  for (const elem of element) {
    elem.disabled;
  }
};

getDisabledForm();
getDisablingFilter();

export {getActivateForm, activeFilter, getDisablingFilter};
