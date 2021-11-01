const selectRooms = document.querySelector('#room_number');
const typeHouse = document.querySelector('#type');
const timein = document.querySelector('#timein');
const timeout = document.querySelector('#timeout');

function disableSelect() {
  const rooms = selectRooms.options[selectRooms.selectedIndex].value;
  const capacity = document.getElementById('capacity');
  const capacityArray = Array.from(capacity.options);
  capacityArray.map((option)=> (option.disabled.true));

  switch(rooms) {
    case '1' :
      capacityArray.map((option) => (option.value === '1') ? option.disabled = false : option.disabled = true);
      break;

    case '2' :
      capacityArray.map((option) => (option.value === '2'|| option.value === '1') ? option.disabled = false : option.disabled = true);
      break;

    case '3' :
      capacityArray.map((option) => (option.value === '2'|| option.value === '1'|| option.value === '3') ? option.disabled = false : option.disabled = true);
      break;

    case '100' :
      capacityArray.map((option) => (option.value === 0) ? option.disabled = false : option.disabled = true);
      break;
  }
}

disableSelect();
selectRooms.addEventListener('change', disableSelect);

function showPrice() {
  const home = typeHouse.value;
  const price = document.querySelector('#price');

  switch(home) {
    case 'bungalow' :
      price.placeholder = 0;
      break;

    case 'flat' :
      price.placeholder = 1000;
      break;

    case 'hotel' :
      price.placeholder = 3000;
      break;

    case 'house' :
      price.placeholder = 5000;
      break;

    case 'palace' :
      price.placeholder = 10000;
      break;
  }
}

typeHouse.addEventListener('change', showPrice);

function timeOut() {
  const timeStart = timein.value;

  if(timeStart === '12:00') {
    timeout.value = '12:00';
  }
  if(timeStart === '13:00') {
    timeout.value = '13:00';
  }
  if(timeStart === '14:00') {
    timeout.value = '14:00';
  }
}

function timeIn() {
  const timeEnd = timeout.value;

  if(timeEnd === '12:00') {
    timein.value = '12:00';
  }
  if(timeEnd === '13:00') {
    timein.value = '13:00';
  }
  if(timeEnd === '14:00') {
    timein.value = '14:00';
  }
}

timein.addEventListener('change', timeOut);
timeout.addEventListener('change', timeIn);
