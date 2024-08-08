// main js entry point 

// assets
import './style.css';
import Logo from './images/The Taco Shack_transparent-.png';
import Menu from './data/menu.csv';

// modules
import loadLogo from './modules/loadLogo.js'
import loadMenu from './modules/loadMenu.js'

// initialize page
loadLogo(Logo);
loadMenu(Menu);