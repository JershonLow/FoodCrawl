function squareClickHandler(coordinate) {
  const coordinateStr = coordinate.toString();

  console.log("Coordinate String: " + coordinateStr);

  let square = sessionStorage.getItem(coordinateStr);

  if (square === null) {
    square = {
      coords: coordinateStr,
      isChecked: true,
    };
    sessionStorage.setItem(coordinateStr, JSON.stringify(square));
  } else {
    square = JSON.parse(square);

    if (square.isChecked === false) {
      square.isChecked = true;
    } else {
      square.isChecked = false;
    }

    console.log(square);

    sessionStorage.removeItem(coordinateStr);
    sessionStorage.setItem(coordinateStr, JSON.stringify(square));
  }

  let element = document.getElementById(coordinateStr);

  if (square.isChecked == true) {
    element.style.backgroundColor = "#7693A6";
    element.style.boxShadow = "0px 0px 5px rgba(137, 237, 226, 0.25)";
  } else {
    element.style.backgroundColor = "#fafeff";
    element.style.boxShadow = "2.5px 2.5px 5px rgba(0, 0, 0, 0.589)";
  }

  console.log(localStorage);
}
