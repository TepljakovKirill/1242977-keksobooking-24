// 1. Переделал featuresCurrent на function randomMeaning() (но не догадался как проверить на повтор)
// 2. Сделал  photos: randomFotos(photos) (но пришлось добавить ещё одну функцию function randomFotos(), т.к. она уже не нужна проверка на повтор)
// 3. Выпадает ошибка из-за  const location = {
// 4. Так и не допёт что делать теперь с const author = { avatar: function(index) {....



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

function randomMeaning() {
  const randomArray = [];
  const arrayLength = randomInteger(0, 5);
  for(let i = 0; i <= arrayLength; i++) {
    const randomValue = randomInteger(0, features.length-1);
    randomArray.push(features[randomValue]);
  }
  return randomArray;
}

function randomFotos() {
  const randomArray = [];
  const arrayLength = randomInteger(0, 2);
  for(let i = 0; i <= arrayLength; i++) {
    const randomValue = randomInteger(0, photos.length-1);
    randomArray.push(photos[randomValue]);
  }
  return randomArray;
}

const type = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const checkin = ['12:00', '13:00', '14:00'];
const features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const photos = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg']

// const featuresCurrent = function(features) {
//   let number = randomInteger(0, 5);
//   let newNumber = randomInteger(0, 5);
//   const featuresBlock = [];
//   featuresBlock.push(features[number]);
//   featuresBlock.push(features[newNumber]);
//   return featuresBlock;
// }

const author = {
  avatar: function(index) {

    if( index < 10 ) {
      let number = '0' + index;
      return `img/avatars/user${number}.png`;
    } return `img/avatars/user${index}.png`;
  }
}

const offer = {
  title: 'Апартаменты',
  address: `${location.lat, location.lng}`,
  price: randomInteger(0, 30),
  type: type[randomInteger(0, 4)],
  rooms: randomInteger(0, 5),
  guests: randomInteger(0, 10),
  checkin: checkin[randomInteger(0, 2)],
  checkout: checkin[randomInteger(0, 2)],
  features: randomMeaning(features),
  description: 'Всё тут красиво и классно',
  photos: randomFotos(photos),
}

// const location = {
//   lat: randomIntegerFixed(35.6500, 35.7000, 4),
//   lng: randomIntegerFixed(139.7000, 139.80000, 4),
// };

const offers = [];

const createOffer = () => ({
  title: 'Апартаменты',
  address: `${location.lat, location.lng}`,
  price: randomInteger(0, 30),
  type: type[randomInteger(0, 5)],
  rooms: randomInteger(0, 5),
  guests: randomInteger(0, 10),
  checkin: checkin[randomInteger(0, 2)],
  checkout: checkin[randomInteger(0, 2)],
  features: randomMeaning(features),
  description: 'Всё тут красиво и классно',
  photos: randomFotos(photos),
});

for(let i = 0; i <= 10; i++) {
  offers.push(createOffer());
}
console.log(offers);







