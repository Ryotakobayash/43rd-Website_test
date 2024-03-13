window.onload = function() {
    const adImage = document.getElementById("ad-image");
    const adLink = document.getElementById("ad-link");
    const imageFolderPath = "Images/";
    const totalImages = 3;
    let currentImageIndex = getRandomIndex();

    function getRandomIndex() {
        return Math.floor(Math.random() * totalImages) + 1;
    }

    const imageUrls = {
        1: "https://example.com/image1",
        2: "https://example.com/image2",
        3: "https://example.com/image3"
    };

    const imageExtensions = {
        1: "png",
        2: "gif",
        3: "png"
    };

    function loadNewImage() {
        const imageExtension = imageExtensions[currentImageIndex];
        adImage.src = imageFolderPath + `Img${currentImageIndex}.${imageExtension}`;
        adLink.href = imageUrls[currentImageIndex];
        currentImageIndex++;
        if (currentImageIndex > totalImages) {
            currentImageIndex = 1;
        }
    }

    loadNewImage();
    setInterval(loadNewImage, 5000);
};
