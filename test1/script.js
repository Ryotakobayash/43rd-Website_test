document.addEventListener("DOMContentLoaded", function() {
    const adImage = document.getElementById("ad-image");
    const adLink = document.getElementById("ad-link");
    const imageFolderPath = "Images/";
    const totalImages = 3; // 画像の総数を指定
    let currentImageIndex = getRandomIndex(); // ランダムな画像インデックスを取得

    function getRandomIndex() {
        return Math.floor(Math.random() * totalImages) + 1;
    }

    const imageUrls = {
        1: "https://example.com/image1",
        2: "https://example.com/image2",
        3: "https://example.com/image3"
    };

    // 画像のインデックスに対応する拡張子を定義
    const imageExtensions = {
        1: "png",
        2: "jpg",
        3: "gif"
    };

    function loadNewImage() {
        // `getImageExtension`関数の代わりに、直接対応する拡張子を取得
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
});
