function randomInteger(min, max) {
  // получить случайное число от (min-0.5) до (max+0.5)
  if( min < 0 || max <= min ) {
    const div = document.createElement('div');
    div.innerHTML = "<strong>Это неправильный интервал!</strong>";
  }
  const rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}
randomInteger(0, 4);

function randomIntegerFixed(min, max, toFixed) {
  // получить случайное число от (min-0.5) до (max+0.5)
  if( min < 0 || max <= min ) {
    const div = document.createElement('div');
    div.innerHTML = "<strong>Это неправильный интервал!</strong>";
  }
  const rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand).toFixed(toFixed);
}
randomIntegerFixed(1, 4, 3);
