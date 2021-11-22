"use strict";

function showInfo(name, username, position = 'Розробник') {
    const flag = confirm(`${name}\n${username}\nПосада: ${position}\nПерейти на сторінку у GitHub?`);
    if (flag) location.href = 'https://github.com/mezgoodle';
}
