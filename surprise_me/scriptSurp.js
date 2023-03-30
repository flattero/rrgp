window.onload = function() {
  // Get a reference to the image element
  var image = document.getElementById('image');

  // Define an array of image file names
  var images = [
    'image1.png',
    'image2.png',
    'image3.png',
    'image4.png',
    'image5.png',
    'image6.png',
    'image7.png',
    'image8.png',
    'image9.png',
    'image10.png',
    'image11.png',
    'image12.png',
    'image13.png',
    'image14.png',
    'image15.png',
    'image16.png',
    'image17.png',
    'image18.png',
    'image19.png',
    'image20.png'
  ];

  // Generate a random number between 0 and the length of the images array
  var randomIndex = Math.floor(Math.random() * images.length);

  // Set the src attribute of the image element to the randomly selected image
  image.src = 'assetsSurp/' + images[randomIndex];
}
