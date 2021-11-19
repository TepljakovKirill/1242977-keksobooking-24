const selectRooms = document.querySelector('#room_number');
const typeHouse = document.querySelector('#type');
const timein = document.querySelector('#timein');
const timeout = document.querySelector('#timeout');
const capacitySelect = document.querySelector('#capacity');
const roomsSelect = document.querySelector('#room_number');
const capacityArray = Array.from(capacitySelect.options);

function disableCapacity () {
  const rooms = roomsSelect.options[selectRooms.selectedIndex].value;
  capacityArray.map((option)=> option.disabled = true);

  capacityArray.map((option) => {
    if(rooms < option.value ||
      (rooms > option.value) && rooms === '100' && option.value !== '0' ||
      (rooms > option.value) && rooms !== '100' && option.value === '0') {
      option.disabled = true;
    } else { option.disabled = false; }
  });
  if(capacitySelect.options[capacitySelect.selectedIndex].disabled){
    capacitySelect.setCustomValidity('Выберите допустимое значение');
  } else {capacitySelect.setCustomValidity('');}
}

disableCapacity();

selectRooms.addEventListener('change', disableCapacity);
capacitySelect.addEventListener('change', disableCapacity);

function showPrice() {
  const home = typeHouse.value;
  const price = document.querySelector('#price');

  switch(home) {
    case 'bungalow' :
      price.placeholder = 0;
      price.min = 0;
      break;

    case 'flat' :
      price.placeholder = 1000;
      price.min = 1000;
      break;

    case 'hotel' :
      price.placeholder = 3000;
      price.min = 3000;
      break;

    case 'house' :
      price.placeholder = 5000;
      price.min = 5000;

      break;

    case 'palace' :
      price.placeholder = 10000;
      price.min = 10000;
      break;
  }
}
showPrice();
typeHouse.addEventListener('change', showPrice);


function timeChangeHandler(evt) {
  const sel = evt.target;
  timein.value = sel.options[sel.selectedIndex].value;
  timeout.value = sel.options[sel.selectedIndex].value;
}

timein.addEventListener('change', timeChangeHandler);
timeout.addEventListener('change', timeChangeHandler);

document.querySelector('#address').readOnly = 'true';
