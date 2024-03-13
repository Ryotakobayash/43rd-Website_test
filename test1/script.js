document.addEventListener("DOMContentLoaded", function() {
    const adImage = document.getElementById("ad-image");
    const adLink = document.getElementById("ad-link");
    const imageFolderPath = "Images/";
    const totalImages = 3; // 画像の総数を指定
    let currentImageIndex = getRandomIndex(); // ランダムな画像インデックスを取得

    // ランダムな画像インデックスを返す関数
    function getRandomIndex() {
        return Math.floor(Math.random() * totalImages) + 1;
    }

    // 画像と関連付けられたURLのマッピングオブジェクト
    const imageUrls = {
        1: "https://example.com/image1",
        2: "https://example.com/image2",
        3: "https://example.com/image3"
        // 画像の数が増える場合は、ここに追加してください
    };

    // Function to load a new image
    function loadNewImage() {
        const imageExtension = getImageExtension(); // 画像の拡張子を取得
        adImage.src = imageFolderPath + `Img${currentImageIndex}.${imageExtension}`;
        adLink.href = imageUrls[currentImageIndex];
        currentImageIndex++;
        if (currentImageIndex > totalImages) {
            currentImageIndex = 1;
        }
    }

    // ランダムな拡張子を返す関数
    function getImageExtension() {
        const extensions = ["png", "jpg", "jpeg", "gif"]; // 使用可能な拡張子を指定
        return extensions[Math.floor(Math.random() * extensions.length)];
    }

    // Load a new image on page load
    loadNewImage();

    // Change image every 5 seconds
    setInterval(loadNewImage, 5000);
});
