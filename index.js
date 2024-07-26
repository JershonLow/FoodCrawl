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
    element.style.backgroundColor = "#CFE4EF";
    element.style.boxShadow = "0px 0px 5px rgba(137, 237, 226, 0.25)";
  } else {
    element.style.backgroundColor = "#fafeff";
    element.style.boxShadow = "2.5px 2.5px 5px rgba(0, 0, 0, 0.589)";
  }
}

// Get the popup elements
var popup = document.getElementById("carouselPopup");
var carouselImage = document.getElementById("carouselImage");
var captionText = document.getElementById("caption");
var currentIndex = 0;
var images = [];

// Get all restaurant divs
var restaurants = document.querySelectorAll(".card-content");

// Loop through all restaurants and add click event
restaurants.forEach(function (restaurant) {
  restaurant.addEventListener("click", function () {
    images = JSON.parse(this.getAttribute("data-images"));
    currentIndex = 0;
    showImage(currentIndex);
    popup.style.display = "block";
  });
});

// Get the close button element
var closeButton = document.getElementsByClassName("close")[0];

// When the close button is clicked, hide the popup
closeButton.addEventListener("click", function () {
  popup.style.display = "none";
});

// Optional: Hide popup when clicking outside the carousel
window.addEventListener("click", function (event) {
  if (event.target === popup) {
    popup.style.display = "none";
  }
});

// Get the prev and next buttons
var prevButton = document.querySelector(".prev");
var nextButton = document.querySelector(".next");

// When the prev button is clicked, show the previous image
prevButton.addEventListener("click", function () {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
});

// When the next button is clicked, show the next image
nextButton.addEventListener("click", function () {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
});

// Function to show the image at the given index
function showImage(index) {
  carouselImage.src = "./Assets/Images/" + images[index];
  captionText.innerHTML = `Image ${index + 1} of ${images.length}`;
}
