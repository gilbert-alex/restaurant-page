// js entry point 

// Assets
import './style.css';
import Logo from './images/The Taco Shack_transparent-.png';
import Menu from './data/menu.csv';
import Home from './data/home.json5';
import About from './data/about.json5';

// Modules
import loadLogo from './modules/loadLogo.js'
import loadMenu from './modules/loadMenu.js'
import loadJson from './modules/loadJson.js'

// HTML elements
const nav = document.querySelector('nav');
const content = document.getElementById('content');

// initialize page
loadLogo(Logo);
loadMenu(content, Menu);

// refresh content on tab clicks
const navEventHandler = () => {

    nav.addEventListener('click', e => {
        const name = e.target.getAttribute('name');

        if (name === 'home') {
            loadJson(content, Home);
        } else if (name === 'menu') {
            loadMenu(content, Menu);
        } else if (name === 'about') {
            loadJson(content, About);
        } else {
            console.log('unrecognized button');
        }
    })
}

navEventHandler();