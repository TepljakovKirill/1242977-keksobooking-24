import {offers} from './testData.js';

const fragment = document.createDocumentFragment();

const canvas = document.querySelector('#map-canvas');

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
  currentPopup.querySelector('.popup__title').textContent = adv.offer.title;
  currentPopup.querySelector('.popup__text--address').textContent = adv.offer.address;

  const priceNight = ' ₽/ночь';
  currentPopup.querySelector('.popup__text--price').textContent = adv.offer.price + priceNight;
  currentPopup.querySelector('.popup__type').textContent = adv.offer.type;

  currentPopup.querySelector('.popup__type').textContent = typeMap.get(adv.offer.type);

  const room = ' комнаты для ';
  const guest = ' гостей';
  currentPopup.querySelector('.popup__text--capacity').textContent = adv.offer.rooms + room + adv.offer.guests + guest;

  const checkin = 'заезд после ';
  const checkout = ' выезд до ';
  currentPopup.querySelector('.popup__text--time').textContent = checkin + adv.offer.checkin + checkout + adv.offer.checkout;

  currentPopup.querySelector('.popup__features').textContent = adv.offer.features.join(', ');

  currentPopup.querySelector('.popup__description').textContent = adv.offer.description;

  adv.offer.photos.forEach((src, index) => {
    const photo = (index > 0) ? currentPopup.querySelector('.popup__photos img').cloneNode() : currentPopup.querySelector('.popup__photos img');
    photo.setAttribute('src', src);
    currentPopup.querySelector('.popup__photos').appendChild(photo);
  });

  currentPopup.querySelector('.popup__avatar').setAttribute('src', adv.author.avatar);

  fragment.appendChild(currentPopup);
};

offers.forEach(createCard);

canvas.appendChild(fragment.querySelector('.popup'));

console.log(offers);
