// loadMenu.js

// Append csv menu item data to html '#content' container.
// .csv headers will become css classes.
// Side effect only. No return value.


const addItem = function (headers, item) {
    const content = document.getElementById('content');

    const div = document.createElement('div');
    div.classList.add('item');

    item.map( (i, index) => {

        const p = document.createElement('p');
        p.classList.add(headers[index]);
        p.textContent = i;
        div.appendChild(p);
    })

    content.appendChild(div);
};


const loadMenu = function (menu) {
    menu.map( (item, index) => {
        if (index === 0) {
            return;
        }
        addItem(menu[0], item);
    });
}

export default loadMenu;