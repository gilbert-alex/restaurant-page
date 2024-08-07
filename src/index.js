import './style.css';
import Logo from './images/The Taco Shack_transparent-.png'

const logoContainer = document.getElementById('logo');

const logoImage = new Image();
logoImage.src = Logo;

logoContainer.appendChild(logoImage);