
import {activeForm} from './forma.js';
// import {offers} from './testData.js';
import {createCard} from './popup.js';
import {createLoader} from './load.js';

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
  iconUrl: './img/main-pin.svg',
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

// функция создания обычного маркера
function createMarker(adv) {
  const normalIcon = L.icon({
    iconUrl: './img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 50],
  });

  const normalMarker = L.marker(
    adv.location,
    {
      icon: normalIcon,
    },
  );

  normalMarker.addTo(map).bindPopup(createCard(adv));
}

const getOffers = (data) => data.forEach(createMarker);
// const getError = (error) => console.log(error);

const load = createLoader(getOffers);
load();

