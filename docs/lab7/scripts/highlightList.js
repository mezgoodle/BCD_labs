"use strict";

let listElement;

const highlightHandler = (event) => {
    const allList = document.getElementById('list');
    let target = event.target.closest('li');
    if (!target || !allList.contains(target)) return;
    highlightElement(target);
}

const highlightElement = (target) => {
    if (listElement) {
        listElement.classList.remove('highlighted');
    }
    listElement = target;
    listElement.classList.add('highlighted');
}

