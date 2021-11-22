"use strict";

const change = () => {
    changeColor('#a2860f')
    setTimeout(changeColor, 30000, '#f3ca20');
}

const changeColor = (color) => {
    document.body.style.backgroundColor = color;
}
