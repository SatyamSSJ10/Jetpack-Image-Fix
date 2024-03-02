<script>
// Get all the divs with class 'page-break'
const pageBreakDivs = document.getElementsByClassName('page-break');

// List of possible SSL states in the order we want to try them
const sslStates = ['?ssl=1', '', '?ssl=0', '?ssl=2','?ssl=3','?ssl=4', "?ssl=5"];

// Helper function to load image and return a promise
const loadImage = (image, src) => new Promise((resolve, reject) => {
  image.onload = resolve;
  image.onerror = reject;
  image.src = src;
});

// Function to attempt to load an image with different SSL states
const attemptLoad = (image, originalSrc, index = 0) => {
  // If we have tried all SSL states, log an error and stop
  if (index >= sslStates.length) {
    console.error('All attempts to load the image failed.');
    return;
  }

  // Try to load the image with the next SSL state
  loadImage(image, originalSrc.replace('?ssl=1', sslStates[index]))
    .catch(() => {
      // If loading failed, try the next SSL state
      attemptLoad(image, originalSrc, index + 1);
    });
};

// Loop through all the divs
for (let i = 0; i < pageBreakDivs.length; i++) {
  // Get all images inside the current div
  const images = pageBreakDivs[i].getElementsByTagName('img');

  // Loop through all the images
  for (let j = 0; j < images.length; j++) {
    const img = images[j];

    // If an error occurs when loading the image, attempt to load it with different SSL states
    img.onerror = () => attemptLoad(img, img.src);
  }
}
</script>
