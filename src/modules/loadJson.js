// loadHome.js

// Load json data to an html container
// Supported file type: json
// Object keys will become html class values.
// No return value -- Side effect only

// helper modules
import { addItem, clearContent } from "./helpers";


const loadHome = function (container, info) {

    clearContent(container);
    
    const keys = Object.keys(info);

    container.appendChild(addItem(keys, info));
}

export default loadHome;