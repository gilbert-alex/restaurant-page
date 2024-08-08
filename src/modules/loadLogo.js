// loadLogo.js

// Load image into html '#logo' container.
// Side effect only. No Return value.

const loadLogo = function (image) {

    const logoContainer = document.getElementById('logo');

    const logoImage = new Image();
    logoImage.src = image;

    logoContainer.appendChild(logoImage);
};

export default loadLogo;