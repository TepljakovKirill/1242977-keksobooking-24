// форма без ошибок
function onSuccess() {
  const successFragment = document.querySelector('#success').content;
  const success = successFragment.querySelector('.success');
  const messageOk = success.cloneNode(true);
  document.body.appendChild(messageOk);
  const myForm = document.querySelector('.ad-form');
  myForm.reset();
}

// функция удаления объявления по клику
document.addEventListener('click', (evt) => {
  const success = document.querySelector('.success');
  if(evt.target === success) {
    success.style.display='none';
  }
});
// функция удаления объявления по кнопке Esc
document.addEventListener('keydown', (evt)=> {
  if(evt.key === 'Escape') {
    const success = document.querySelector('.success');
    success.style.display='none';
  }
});
// форма с ошибкой
function onError() {
  const errorFragment = document.querySelector('#error').content;
  const error = errorFragment.querySelector('.error');
  const messageError = error.cloneNode(true);
  document.body.appendChild(messageError);
}
// функция удаления объявления с ошибкой по клику
document.addEventListener('click', (evt) => {
  const errorButton = document.querySelector('.error__button');
  const error = document.querySelector('.error');
  if(evt.target === errorButton || evt.target === error) {
    error.style.display='none';
  }
});
// функция удаления объявления с ошибкой по кнопке Esc
document.addEventListener('keydown', (evt)=> {
  if(evt.key === 'Escape') {
    const error = document.querySelector('.error');
    error.style.display='none';
  }
});
// функция сброса формы
document.addEventListener('click', (evt) => {
  const reset = document.querySelector('.ad-form__reset');
  if(evt.target === reset) {
    const myForm = document.querySelector('.ad-form');
    myForm.reset();
  }
});

const setUserFormSubmit = (onSuccess, onError) => {
  const keksoForm = document.querySelector('.ad-form');
  keksoForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const formData = new FormData(evt.target);

    fetch(
      'https://24.javascript.pages.academy/keksobooking',
      {
        method: 'POST',
        body: formData,
      },
    ).then((response)=> {
      if(response.ok) {
        onSuccess();
      } else {
        onError();
      }
    }).catch((error) => {
      onError(error);
    });
  });
};

setUserFormSubmit(onSuccess, onError);
