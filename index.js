// Array of image names
var imageNames = ["dice1", "dice2", "dice3", "dice4", "dice5", "dice6"];

// Get a random index
var randomIndex1 = Math.floor(Math.random() * imageNames.length);
var randomIndex2 = Math.floor(Math.random() * imageNames.length);


// Get the image element
var imageElement1 = document.querySelector(".img1");
var imageElement2 = document.querySelector(".img2");

// Set the src attribute with the randomly selected image name
imageElement1.src = "images/" + imageNames[randomIndex1] + ".png";
imageElement2.src = "images/" + imageNames[randomIndex2] + ".png";


