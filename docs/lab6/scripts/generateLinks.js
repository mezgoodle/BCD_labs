"use strict";

const links = [
    ['Про Скайрім (частина 1)', '../lab1/index.html'],
    ['Про Скайрім (частина 2)', '../lab1/second.page.html'],
    ['Про Wargaming', '../lab2/games.html'],
    ['Про Warcraft', '../lab5/index.html']
]

const generateLinks = () => {
    let header = document.createElement('H1');
    const text = document.createTextNode('Згенеровані посилання');
    header.appendChild(text);
    document.body.appendChild(header);
    let list = document.createElement('UL');
    for (const link of links) {
        const listElement = document.createElement('li');
        const a = document.createElement('a');
        const text = document.createTextNode(link[0]);
        a.appendChild(text);
        a.href = link[1];
        listElement.appendChild(a);
        list.append(listElement);
    }

    let listElement = document.createElement('li');
    let a = document.createElement('a');
    let link_text = document.createTextNode('Google');
    a.appendChild(link_text);
    a.href = 'https://google.com.ua';
    listElement.appendChild(a);
    list.prepend(listElement);

    document.body.after(list);
}

const deleteLinks = () => {
    const links = document.getElementsByTagName('ul')[1];
    links.remove();
    const h1 = document.createElement('h1');
    const text = document.createTextNode('Посилання видалені');
    h1.appendChild(text);
    document.body.lastElementChild.replaceWith(h1);
}
