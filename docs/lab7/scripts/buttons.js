"use strict";

class Buttons {
    constructor(element) {
        this._element = element;
        element.onclick = this.onClick.bind(this);
    }
    boxes() {
        alert('У грі є багато крутих боксів, з яких випадають рідкісні предмети, наприклад, машини');
    }
    houses() {
        alert('Купити власний будинок важко, але, можливо. Ціни від 20 мільйонів');
    }
    mine() {
        alert('Наразі один з найкращих методів заробітку. За годину приблизно 1 млн. доларів');
    }
    onClick(event) {
        const action = event.target.dataset.action;
        if (action) this[action]();
    };
}
