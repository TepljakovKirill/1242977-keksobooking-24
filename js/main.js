
const type = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const checkin = ['12:00', '13:00', '14:00'];
const features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const photos = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];

function randomInteger(min, max) {
  if( min < 0 || min === max || min > max ) {
    return false;
  }
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

function randomIntegerFixed(min, max, toFixed) {
  if( min < 0 || min === max || min > max ) {
    return false;
  }
  const rand = min - 0.5 + Math.random() * (max - min);
  return rand.toFixed(toFixed);
}

function createRandomElement(countElements) {
  const randomArray = [];
  const arrayLength = randomInteger(0, countElements.length-1);
  for(let item = 0; item <= arrayLength; item++) {
    const randomValue = randomInteger(0, countElements.length-1);
    randomArray.push(countElements[randomValue]);
  }
  const cleanArray = Array.from(new Set(randomArray));
  return cleanArray;
}

function author() {
  const index = randomInteger(1, 10);
  if(index < 10) {
    return `img/avatars/user0${index}.png`;
  }
  return `img/avatars/user${index}.png`;
}

const locations = function createLocations() {
  return {
    lat: randomIntegerFixed(35.6500, 35.7000, 4),
    lng: randomIntegerFixed(139.7000, 139.80000, 4),
  };
};

const offers = [];

const createOffer = () => ({
  author: {
    avatar: author(),
  },
  offer: {
    title: 'Апартаменты',
    address: `${locations().lat}, ${locations().lng}`,
    price: randomInteger(0, 30),
    type: type[randomInteger(0, 4)],
    rooms: randomInteger(0, 5),
    guests: randomInteger(0, 10),
    checkin: checkin[randomInteger(0, 2)],
    checkout: checkin[randomInteger(0, 2)],
    features: createRandomElement(features),
    description: 'Всё тут красиво и классно',
    photos: createRandomElement(photos),
  },
  locations: locations(),
});

for(let item = 0; item <= 10; item++) {
  offers.push(createOffer());
}

