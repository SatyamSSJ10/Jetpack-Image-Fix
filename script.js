<style>
  #fix-images-btn {
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #4CAF50;
    color: white;
    padding: 10px 20px;
    border-radius: 10px;
    font-size: 16px;
    cursor: pointer;
  }
</style>
<button id="fix-images-btn">Fix broken images</button>

<script>
  document.getElementById("fix-images-btn").addEventListener("click", function () {
    const images = document.querySelectorAll("img"); // get all images ##div.page-break img
    for (let i = 0; i < images.length; i++) {
      images[i].onerror = function () { // check if the image fails to load
        const imgUrl = images[i].src;
        const newImgUrl = imgUrl.replace("?ssl=1", ""); // remove the "?ssl=1" parameter from the image URL
        images[i].src = newImgUrl; // set the new image URL
        images[i].addEventListener("load", function () { // reload the image after correcting the link
          images[i].src = newImgUrl;
        })
      }
    }
    alert("IF THE IMAGE DOESN'T APPEAR PLEASE RIGHT CLICK THE IMAGE ICON AND RELOAD IMAGE.");
  });
</script>
