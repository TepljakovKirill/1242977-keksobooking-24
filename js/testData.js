import {type, checkin, features, photos} from './variable.js';
import {randomInteger, randomIntegerFixed} from './utilits.js';

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
    lat: randomIntegerFixed(35.993474, 36.994474, 4),
    lng: randomIntegerFixed(139.87562, 140.88962, 4),
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
    price: randomInteger(0, 5000),
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

export {offers};
