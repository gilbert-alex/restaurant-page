// loadMenu.js

// Load csv data to an html container
// Supported file type: .csv
// CSV headers will become html class values
// No return value -- Side effect only

// helper modules
import {addItem, clearContent} from './helpers'


const loadMenu = function (container, menu) {

    clearContent(container);

    const headers = menu[0];

    menu.map( (item, index) => {
        // skip header row
        if (index === 0) {
            return;
        }
        container.appendChild(addItem(headers, item));
    });
}

export default loadMenu;