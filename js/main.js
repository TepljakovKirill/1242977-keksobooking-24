function randomInteger(min, max) {

  if( min < 0 || min === max || min > max ) {
    return false;
  }
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

randomInteger(0, 4);

function randomIntegerFixed(min, max, toFixed) {

  if( min < 0 || min === max || min > max ) {
    return false;
  }
  const rand = min - 0.5 + Math.random() * (max - min);
  return rand.toFixed(toFixed);
}
randomIntegerFixed(1, 4, 3);
