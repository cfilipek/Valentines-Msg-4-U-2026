// create variables to store the path to your image files
const img1 = "./img/val-1.png";

const img2 = "./img/val-2.png";

const img3 = "./img/val-3.png";

const img4 = "./img/val-4.png";

const img5 = "./img/val-5.png";

const img6 = "./img/val-6.png";

const img7 = "./img/val-7.png";

const img8 = "./img/val-8.png";

const img9 = "./img/val-9.png";

const img10 = "./img/val-10.png";

const img11 = "./img/val-11.png";

const img12 = "./img/val-12.png";

const img13 = "./img/val-13.png";

const img14 = "./img/val-14.png";

const img15 = "./img/val-15.png";

const img16 = "./img/val-16.png";


// define your images here
const images = [ img1,img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img6];

// this chooses a random number from all available image indices
var randomImage = images[Math.floor(Math.random() * images.length)];
// make the URL into a proper image tag
var image = "<img src='" + randomImage + "'>";
// append to the div
document.getElementById("valentines-container").innerHTML = image;

const refreshButton = document.getElementById('refreshButton');

refreshButton.addEventListener('click', function() {
  location.reload();
});