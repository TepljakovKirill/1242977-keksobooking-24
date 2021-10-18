import {offers} from './testData.js';

const fragment = document.createDocumentFragment();

const canvas = document.querySelector('#map-canvas');

const card = document.querySelector('#card').content;
const popup = card.querySelector('.popup');

const createCard = (adv) => {
  const currentPopup = popup.cloneNode(true);
  currentPopup.querySelector('.popup__title').textContent = adv.offer.title;
  currentPopup.querySelector('.popup__text--address').textContent = adv.offer.address;

  const priceNight = ' ₽/ночь';
  currentPopup.querySelector('.popup__text--price').textContent = adv.offer.price + priceNight;
  currentPopup.querySelector('.popup__type').textContent = adv.offer.type;

  const room = ' комнаты для ';
  const guest = ' гостей';
  currentPopup.querySelector('.popup__text--capacity').textContent = adv.offer.rooms + room + adv.offer.guests + guest;

  const checkin = 'заезд после ';
  const checkout = ' выезд до ';
  currentPopup.querySelector('.popup__text--time').textContent = checkin + adv.offer.checkin + checkout + adv.offer.checkout;

  // const list = document.querySelector('.popup__features');
  // const fragment2 = document.createDocumentFragment();

  // for(let item = 0; item <= (adv.offer.features).length-1; item++) {
  //   const newElement = document.createElement('li');
  //   newElement.classList.add('popup__feature');
  //   newElement.innerHTML = adv.offer.features[item];
  //   // fragment2.appendChild(newElement);
  // }
  // list.appendChild(fragment2);
  currentPopup.querySelector('.popup__features').textContent = adv.offer.features;

  currentPopup.querySelector('.popup__description').textContent = adv.offer.description;

  // currentPopup.querySelector('.popup__photos').textContent = adv.offer.photos;

  fragment.appendChild(currentPopup);
};

offers.forEach(createCard);

canvas.appendChild(fragment.querySelector('.popup'));


