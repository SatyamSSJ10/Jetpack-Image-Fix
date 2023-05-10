// Get all the images on the page
const images = document.getElementsByTagName('img');

// Loop through all the images
for (let i = 0; i < images.length; i++) {
  // Add an error event listener to each image
  images[i].addEventListener('error', function() {
    // Check if the image URL contains "?ssl=1"
    if (this.src.includes('?ssl=1')) {
      // Remove "?ssl=1" from the image URL and reload the image
      this.src = this.src.replace('?ssl=1', '');
    }
  });
}
