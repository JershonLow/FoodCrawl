function squareClickHandler(coordinate) {
  let coordinateStr = coordinate.toString();

  console.log("Coordinate String: " + coordinateStr);

  let checkSquare = localStorage.getItem(coordinateStr);

  if (checkSquare === null) {
    let square = {
      coords: coordinateStr,
      isChecked: true,
    };

    localStorage.setItem(coordinateStr, JSON.stringify(square));
  } else {
    let square = JSON.parse(checkSquare);

    if (square.isChecked === false) {
      square.isChecked = true;
    } else {
      square.isChecked = false;
    }

    console.log(square);

    localStorage.removeItem(coordinateStr);
    localStorage.setItem(coordinateStr, JSON.stringify(square));
  }

  console.log(localStorage);
}
