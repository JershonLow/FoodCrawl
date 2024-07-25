function squareClickHandler(coordinate) {
  const coordinateStr = coordinate.toString();

  console.log("Coordinate String: " + coordinateStr);

  let square = localStorage.getItem(coordinateStr);

  if (square === null) {
    square = {
      coords: coordinateStr,
      isChecked: true,
    };
    localStorage.setItem(coordinateStr, JSON.stringify(square));
  } else {
    square = JSON.parse(square);

    if (square.isChecked === false) {
      square.isChecked = true;
    } else {
      square.isChecked = false;
    }

    console.log(square);

    localStorage.removeItem(coordinateStr);
    localStorage.setItem(coordinateStr, JSON.stringify(square));
  }

  let element = document.getElementById(coordinateStr);

  if (square.isChecked == true) {
    element.style.backgroundColor = "green";
  } else {
    element.style.backgroundColor = "red";
  }

  console.log(localStorage);
}
