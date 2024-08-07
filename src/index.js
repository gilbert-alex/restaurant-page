import './style.css';
import Logo from './images/The Taco Shack_transparent-.png'
import Menu from './data/menu.csv'


const fillLogo = function (image) {
    const logoContainer = document.getElementById('logo');

    const logoImage = new Image();
    logoImage.src = image;

    logoContainer.appendChild(logoImage);
}


const addItem = function (headers, item) {
    const content = document.getElementById('content');

    const div = document.createElement('div');
    div.classList.add('item');

    item.map( (i, index) => {
        // console.log(`index: ${index}`);
        // console.log(`item: ${i}`);

        const p = document.createElement('p');
        p.classList.add(headers[index]);
        p.textContent = i;
        div.appendChild(p);
    })

    content.appendChild(div);
};


fillLogo(Logo);

Menu.map( (item, index) => {
    if (index === 0) {
        return;
    }
    addItem(Menu[0], item);
});