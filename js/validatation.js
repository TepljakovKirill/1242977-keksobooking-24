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

typeHouse.addEventListener('change', showPrice);


function timeCheck(evt) {
  const sel = evt.target;
  timein.value = sel.options[sel.selectedIndex].value;
  timeout.value = sel.options[sel.selectedIndex].value;
}

timein.addEventListener('change', timeCheck);
timeout.addEventListener('change', timeCheck);

document.querySelector('#address').disabled = 'true';

