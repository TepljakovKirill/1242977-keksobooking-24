import {activeForm} from './forma.js';
import {randomInteger} from './utilits.js';

const map = L.map('map-canvas')
  .on('load', () => {
    activeForm();
  })
  .setView({
    lat: 35.6895,
    lng: 139.692,
  }, 10);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

// главный маркер
const chiуfIcon = L.icon({
  iconUrl: '../img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const chiуfMarker = L.marker(
  {
    lat: 35.689649,
    lng: 139.76944,
  },
  {
    draggable: true,
    icon: chiуfIcon,
  },
);

chiуfMarker.addTo(map);

chiуfMarker.on('moveend', (evt) => {
  document.querySelector('#address').value = evt.target.getLatLng();
});

const points = [
  {
    title: 'Уютное гнездышко для молодоженов',
    lat: 59.96925,
    lng: 30.31730,
  },
];

const createCustomPopup = (point) => {
  const balloonTemplate = document.querySelector('#card').content.querySelector('.popup');
  const popupElement = balloonTemplate.cloneNode(true);

  popupElement.querySelector('.popup__title').textContent = point.title;

  return popupElement;
};

// функция создания обычного маркера
function createMarker() {
  const normalIcon = L.icon({
    iconUrl: '../img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 50],
  });

  const normalMarker = L.marker(
    {
      lat: randomInteger(35.6500, 35.7000),
      lng: randomInteger(139.7000, 139.80000),
    },
    {
      draggable: true,
      icon: normalIcon,
    },
  );

  normalMarker.addTo(map).bindPopup(createCustomPopup(points));
}
createMarker();
