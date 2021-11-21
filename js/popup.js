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

  if(adv.offer.title) {
    currentPopup.querySelector('.popup__title').textContent = adv.offer.title;
  } else {
    currentPopup.querySelector('.popup__title').classList.add('hidden');
  }
  if(adv.offer.address) {
    currentPopup.querySelector('.popup__text--address').textContent = adv.offer.address;
  } else {
    currentPopup.querySelector('.popup__text--address').classList.add('hidden');
  }

  const priceNight = ' ₽/ночь';
  const popupType = currentPopup.querySelector('.popup__type');
  if(adv.offer.price) {
    currentPopup.querySelector('.popup__text--price').textContent = adv.offer.price + priceNight;
  } else {
    currentPopup.querySelector('.popup__text--price').classList.add('hidden');
  }
  if(adv.offer.type) {
    popupType.textContent = adv.offer.type;
  } else {
    popupType.classList.add('hidden');
  }
  popupType.textContent = typeMap.get(adv.offer.type);

  const room = ' комнаты для ';
  const guest = ' гостей';
  if(adv.offer.guests) {
    currentPopup.querySelector('.popup__text--capacity').textContent = adv.offer.rooms + room + adv.offer.guests + guest;
  } else {
    currentPopup.querySelector('.popup__text--capacity').classList.add('hidden');
  }

  const checkin = 'заезд после ';
  const checkout = ' выезд до ';
  if(adv.offer.checkin) {
    currentPopup.querySelector('.popup__text--time').textContent = checkin + adv.offer.checkin + checkout + adv.offer.checkout;
  } else {
    currentPopup.querySelector('.popup__text--time').classList.add('hidden');
  }

  if(adv.offer.features) {
    const features = currentPopup.querySelectorAll('.popup__feature');
    const featuresArr = adv.offer.features;
    const findContaints = (featureItem) => (
      features.forEach((feature) => {
        if (feature.classList.contains(`popup__feature--${featureItem}`)) {
          feature.classList.remove('hidden');
        }
      })
    );

    features.forEach((feature) => feature.classList.add('hidden'));
    featuresArr.forEach(findContaints);
  } else {
    currentPopup.querySelector('.popup__features').classList.add('hidden');
  }

  if(adv.offer.description) {
    currentPopup.querySelector('.popup__description').textContent = adv.offer.description;
  } else {
    currentPopup.querySelector('.popup__description').classList.add('hidden');
  }

  if(adv.offer.photos) {
    adv.offer.photos.forEach((src, index) => {
      const photo = (index > 0) ? currentPopup.querySelector('.popup__photos img').cloneNode() : currentPopup.querySelector('.popup__photos img');
      photo.setAttribute('src', src);
      // проверить зачем
      currentPopup.querySelector('.popup__photos').appendChild(photo);
    });
  } else {
    currentPopup.querySelector('.popup__photos').classList.add('hidden');
  }

  currentPopup.querySelector('.popup__avatar').setAttribute('src', adv.author.avatar);

  return currentPopup;
};

export {createCard};
