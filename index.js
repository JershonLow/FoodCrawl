document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM fully loaded and parsed");
  let i = 0;
  let j = 0;
  let square = {
    coords: 99,
    isChecked: true,
  };
  let coordinateStr = 10;

  for (j = 0; j < 5; j++) {
    for (i = 0; i < 5; i++) {
      coordinateStr += 1;
      console.log(i + ", " + j);
      console.log(coordinateStr);

      square = JSON.parse(localStorage.getItem(coordinateStr));

      console.log(square);

      if (square === null) {
        square = {
          coords: coordinateStr,
          isChecked: false,
        };

        localStorage.setItem(coordinateStr, JSON.stringify(square));
      } else {
        checkColour(coordinateStr, square);
      }
    }
    coordinateStr += 5;
  }
});

function squareClickHandler(coordinate) {
  const coordinateStr = coordinate.toString();

  let square = {
    coords: 99,
    isChecked: true,
  };

  square = localStorage.getItem(coordinateStr);

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

  checkColour(coordinateStr, square);

  console.log(localStorage);
}

function checkColour(coordinateStr, square) {
  let element = document.getElementById(coordinateStr);

  if (square.isChecked == true) {
    element.style.backgroundColor = "#7693A6";
    element.style.boxShadow = "0px 0px 5px rgba(137, 237, 226, 0.25)";
  } else {
    element.style.backgroundColor = "#fafeff";
    element.style.boxShadow = "2.5px 2.5px 5px rgba(0, 0, 0, 0.589)";
  }
}
