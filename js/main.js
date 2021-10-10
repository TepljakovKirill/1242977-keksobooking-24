
// 1. Выпадает ошибка из-за  const location. Переименовал на locations и добавил вывод функции в массив и заработало
// 2. Не уверен, что правильно доделал const author = {... так ли нужно было получать значение из объекта?

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

// function randomMeaning() {
//   const randomArray = [];
//   const arrayLength = randomInteger(0, 5);
//   for(let item = 0; item <= arrayLength; item++) {
//     const randomValue = randomInteger(0, features.length-1);
//     randomArray.push(features[randomValue]);
//   }
//   const cleanArray = new Set(randomArray);
//   return cleanArray;
// }

// function randomFotos() {
//   const randomArray = [];
//   const arrayLength = randomInteger(0, 2);
//   for(let item = 0; item <= arrayLength; item++) {
//     const randomValue = randomInteger(0, photos.length-1);
//     randomArray.push(photos[randomValue]);
//   }
//   return randomArray;
// }

function createRandomElement(countElements) {
  const randomArray = [];
  const arrayLength = randomInteger(0, countElements.length-1);
  for(let item = 0; item <= arrayLength; item++) {
      const randomValue = randomInteger(0, countElements.length-1);
      randomArray.push(countElements[randomValue]);
  }
  const cleanArray = new Set(randomArray);
  return cleanArray;
}

// const index = randomInteger(1, 10);
// const author = (index) => (index < 10) ? `img/avatars/user0${index}.png` : `img/avatars/user${index}.png`;

function author() {
  const index = randomInteger(1, 10);
  if(index < 10) {
    let number = '0' + index;
    return `img/avatars/user${number}.png`;
  }
  return `img/avatars/user${index}.png`;
}

// const locations = {
//   lat: randomIntegerFixed(35.6500, 35.7000, 4),
//   lng: randomIntegerFixed(139.7000, 139.80000, 4),
// };

function createLocations() {
  return {
    lat: randomIntegerFixed(35.6500, 35.7000, 4),
    lng: randomIntegerFixed(139.7000, 139.80000, 4),
  };
};

const offers = [];

const createOffer = () => ({
  avatar: author(),
  title: 'Апартаменты',
  address: createLocations(),
  price: randomInteger(0, 30),
  type: type[randomInteger(0, 5)],
  rooms: randomInteger(0, 5),
  guests: randomInteger(0, 10),
  checkin: checkin[randomInteger(0, 2)],
  checkout: checkin[randomInteger(0, 2)],
  features: createRandomElement(features),
  description: 'Всё тут красиво и классно',
  photos: createRandomElement(photos),
});

for(let item = 0; item <= 10; item++) {
  offers.push(createOffer());
};

