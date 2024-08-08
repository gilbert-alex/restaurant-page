// helpers.js

// 'p' elements within an html div
// included class names for css selectors
const addItem = function (htmlClass, data) {

    const div = document.createElement('div');
    div.classList.add('item');

    if (Array.isArray(data)) {
        data.map( (d, index) => {
            const p = document.createElement('p');
            p.classList.add(htmlClass[index]);
            p.textContent = d;
            div.appendChild(p);
        });
    } else {
        htmlClass.forEach( h => {
            const p = document.createElement('p');
            p.classList.add(h);
            p.textContent = data[h];
            div.appendChild(p);
        })
    }

    return div;
};

// remove all html child elements
const clearContent = (container) => {

    while (container.firstChild) {
        container.removeChild(container.lastChild);
    };

}

export { addItem, clearContent };