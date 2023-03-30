function loadImage(imageSrc) {
  // Get the selected image element
  const selectedImage = document.getElementById("selected-image");

  // Set the source of the selected image to the clicked thumbnail
  selectedImage.src = imageSrc;

  // Show the selected image container
  const selectedImageContainer = document.getElementById("selected-image-container");
  selectedImageContainer.style.display = "flex";

  // Add event listener to hide the selected image container when clicked
  selectedImageContainer.addEventListener("click", function() {
    selectedImageContainer.style.display = "none";
  });
}
