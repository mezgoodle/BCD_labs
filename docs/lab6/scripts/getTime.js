"use strict";

const getTime = () => {
    const pElem = document.getElementById('time');
    const time = new Date();
    const timeStr = time.toLocaleTimeString();
    pElem.innerHTML = `Зараз у палаці ${timeStr}`;
}