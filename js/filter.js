const selectRooms = document.querySelector('#room_number');
selectRooms.addEventListener('change', disableSelect);

function disableSelect(evt) {
  const rooms = evt.target.value;
  switch(rooms) {
    case document.querySelector('#capacity').options[0].value :
      alert('ok');
      break;

    case document.getElementById('capacity').options[1].value :
      document.getElementById('capacity').options[1].prop('disabled', true);
      break;

    case document.getElementById('capacity').options[2].value :
      document.getElementById('capacity').options[2].prop('disabled', true);
      break;

    case document.getElementById('capacity').options[3].value :
      document.getElementById('capacity').options[3].prop('disabled', true);
      break;
  }
}

// код не рабочий. Много чего перепробовал, но так и не получается совладать с синхронностью работы
// id="room_number" и id="capacity". Дай пожалуйста подсказку))
