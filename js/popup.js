
const card = document.querySelector('#card').content;
const popup = card.querySelector('.popup');

const typeMap = new Map([
  ['flat', 'Квартира'],
  ['bungalow', 'Бунгало'],
  ['house', 'Дом'],
  ['palace', 'Дворец'],
  ['hotel', 'Отель'],
]);

const createCard = (adv) => {
  const currentPopup = popup.cloneNode(true);

  if(currentPopup.querySelector('.popup__title').textContent) {
    currentPopup.querySelector('.popup__title').textContent = adv.offer.title;
  } else {
    currentPopup.querySelector('.popup__title').add('.hidden');
  }
  if(currentPopup.querySelector('.popup__text--address').textContent) {
    currentPopup.querySelector('.popup__text--address').textContent = adv.offer.address;
  } else {
    currentPopup.querySelector('.popup__text--address').add('.hidden');
  }

  const priceNight = ' ₽/ночь';
  if(currentPopup.querySelector('.popup__text--price').textContent) {
    currentPopup.querySelector('.popup__text--price').textContent = adv.offer.price + priceNight;
  } else {
    currentPopup.querySelector('.popup__text--price').add('.hidden');
  }
  if(currentPopup.querySelector('.popup__type').textContent) {
    currentPopup.querySelector('.popup__type').textContent = adv.offer.type;
  } else {
    currentPopup.querySelector('.popup__type').add('.hidden');
  }
  currentPopup.querySelector('.popup__type').textContent = typeMap.get(adv.offer.type);

  const room = ' комнаты для ';
  const guest = ' гостей';
  if(currentPopup.querySelector('.popup__text--capacity').textContent) {
    currentPopup.querySelector('.popup__text--capacity').textContent = adv.offer.rooms + room + adv.offer.guests + guest;
  } else {
    currentPopup.querySelector('.popup__text--capacity').add('.hidden');
  }

  const checkin = 'заезд после ';
  const checkout = ' выезд до ';
  if(currentPopup.querySelector('.popup__text--time').textContent) {
    currentPopup.querySelector('.popup__text--time').textContent = checkin + adv.offer.checkin + checkout + adv.offer.checkout;
  } else {
    currentPopup.querySelector('.popup__text--time').add('.hidden');
  }
  if(currentPopup.querySelector('.popup__features').textContent) {
    currentPopup.querySelector('.popup__features').textContent = adv.offer.features.join(', ');
  } else {
    currentPopup.querySelector('.popup__features').add('.hidden');
  }

  if(currentPopup.querySelector('.popup__description').textContent) {
    currentPopup.querySelector('.popup__description').textContent = adv.offer.description;
  } else {
    currentPopup.querySelector('.popup__description').add('.hidden');
  }

  adv.offer.photos.forEach((src, index) => {
    const photo = (index > 0) ? currentPopup.querySelector('.popup__photos img').cloneNode() : currentPopup.querySelector('.popup__photos img');
    photo.setAttribute('src', src);
    currentPopup.querySelector('.popup__photos').appendChild(photo);
  });

  currentPopup.querySelector('.popup__avatar').setAttribute('src', adv.author.avatar);

  return currentPopup;
};

export {createCard};
