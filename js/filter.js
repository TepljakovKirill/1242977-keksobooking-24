const selectRooms = document.querySelector('#room_number');
disableSelect();
selectRooms.addEventListener('change', disableSelect);

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


