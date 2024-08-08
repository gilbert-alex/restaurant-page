// main js entry point 

// assets
import './style.css';
import Logo from './images/The Taco Shack_transparent-.png';
import Menu from './data/menu.csv';
import Home from './data/home.json5';

// modules
import loadLogo from './modules/loadLogo.js'
import loadMenu from './modules/loadMenu.js'
import loadHome from './modules/loadHome.js'

// initialize page
loadLogo(Logo);
loadMenu(Menu);

// refresh tab content 
const navEventHandler = () => {
    const nav = document.querySelector('nav');

    nav.addEventListener('click', e => {
        const name = e.target.getAttribute('name');

        clearContent();

        if (name === 'home') {
            loadHome(Home);
        } else if (name === 'menu') {
            loadMenu(Menu);
        } else if (name === 'about') {
            console.log('load about');
        } else {
            console.log('unrecognized button');
        }
    })
}

const clearContent = () => {
    const content = document.getElementById('content');

    while (content.firstChild) {
        content.removeChild(content.lastChild);
    };
}

navEventHandler();