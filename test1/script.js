document.addEventListener("DOMContentLoaded", function() {
    const adImage = document.getElementById("ad-image");
    const adLink = document.getElementById("ad-link");
    const imageFolderPath = "Images/";
    let currentImageIndex = 1;

    // Function to load a new image
    function loadNewImage() {
        adImage.src = imageFolderPath + `Img${currentImageIndex}.png`;
        adLink.href = `https://example.com/${currentImageIndex}`; // Replace example.com with actual URL
        currentImageIndex++;
        if (currentImageIndex > 3) { // Assuming there are 3 images, change accordingly
            currentImageIndex = 1;
        }
    }

    // Load a new image on page load
    loadNewImage();

    // Change image every 5 seconds
    setInterval(loadNewImage, 5000);
});
