"use strict";

const toggler = () => {
    document.addEventListener('click', (event) => {
        const identifier = event.target.dataset.toggleId;
        if (!identifier) return;
        const map = document.getElementById('map');
        map.hidden = !map.hidden;
    })
}

toggler();
