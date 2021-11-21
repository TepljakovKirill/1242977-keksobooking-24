import { getActivateForm } from './forma.js';
import { createCard } from './popup.js';
import { createLoader } from './load.js';
import { getFilterCheck } from './filter-adv.js';
import { activeFilter } from './forma.js';

const CENTER = {
  lat: 35.689649,
  lng: 139.76944,
};

const address = document.querySelector('#address');

//фильтрация
const mapFilters = document.querySelector('.map__filters');
const map = L.map('map-canvas')
  .on('load', () => {
    getActivateForm();
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
//
const chiуfMarker = L.marker(
  CENTER,
  {
    draggable: true,
    icon: chiуfIcon,
  },
);
const centerString = chiуfMarker.getLatLng();

chiуfMarker.addTo(map);

chiуfMarker.on('moveend', (evt) => {
  address.value = evt.target.getLatLng();
});
//Слой маркеров
const markerGroup = L.layerGroup().addTo(map);

// функция создания обычного маркера
const createMarker = (adv) => {
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
  normalMarker
    .addTo(markerGroup)
    .bindPopup(createCard(adv));
};

const clearMarker = () => {
  chiуfMarker.setLatLng(CENTER);
  address.value = centerString;
};

clearMarker();

const getSelectMarkers = (result) => {
  markerGroup.clearLayers();
  result.forEach(createMarker);
};

const getOffers = (data) => {
  mapFilters.addEventListener('click', (evt) => getFilterCheck(evt, data));
  getSelectMarkers(data.slice(0,10));
  activeFilter();
};


const load = createLoader(getOffers);
load();

export { clearMarker, map, getSelectMarkers};


