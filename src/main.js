function Ship(shipName, timesHit) {
  let length;
  let isSunk = false;
  if (shipName === 'carrier') {
    length = 5;
  }
  if (shipName === 'patrol boat') {
    length = 2;
  }
  if (shipName === 'battleship') {
    length = 4;
  } else {
    length = 3;
  }

  if (timesHit === length) {
    isSunk = true;
  }

  return {
    length,
    timesHit,
    isSunk,
  };
}
