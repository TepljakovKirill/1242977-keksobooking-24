import { debounce } from './utils/debounce.js';
import { getSelectMarkers } from './leaflet.js';

const filter = {};
filter.features = new Set();

const getFilterArray = (adv, filterArr) => {
  const offer = adv.offer;
  let match = 0;
  filterArr.features.forEach((feature) => {
    if (typeof offer.features !== 'undefined') {
      if (offer.features.indexOf(feature) !== -1) {
        match++;
      }
    } else {
      return false;
    }
  });

  if (match !== filterArr.features.size) {
    return false;
  }

  if (Object.keys(filterArr).length > 1) {
    for (const key in filterArr) {
      if (key !== 'features') {
        switch (key) {
          case 'rooms':
          case 'guests':
            if (offer[key] !== 'any' && filterArr[key] > offer[key]) {
              return false;
            }
            break;
          case 'type':
            if (filterArr[key] !== 'any' && filterArr[key] !== offer[key]) {
              return false;
            }
            break;
          case 'price':
            switch (filterArr[key]) {
              case 'low':
                if (offer[key] > 10000) {
                  return false;
                }
                break;
              case 'middle':
                if (offer[key] > 50000 || offer[key] < 10000) {
                  return false;
                }
                break;
              case 'high':
                if (offer[key] < 50000) {
                  return false;
                }
                break;
            }
            break;
        }
      }
    }
  }

  return true;
};

const getAdvanceFilter = (data, filterArr) => {
  const resultData = data.filter((adv) => getFilterArray(adv, filterArr));
  getSelectMarkers(resultData.slice(0, 10));
  return resultData;
};

const debounceFilterAdv = debounce((data)=>getAdvanceFilter(data, filter),1000);

function getFilterCheck(evt, data) {
  const currentElement = evt.target;

  if (currentElement.matches('select')) {
    const name = evt.target.name.replace('housing-','');
    currentElement.addEventListener(
      'change',
      () => filter[name] = evt.target.value, (
        filter[name] = evt.target.value
      ),
      {once: true},
    );
  }

  if (currentElement.matches('label')) {
    if (!currentElement.previousElementSibling.checked) {
      filter.features.add(currentElement.previousElementSibling.value);
    } else {
      filter.features.delete(currentElement.previousElementSibling.value);
    }
  }
  debounceFilterAdv(data, filter);
}
export {getFilterCheck};
