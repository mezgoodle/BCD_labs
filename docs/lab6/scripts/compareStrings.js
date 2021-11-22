"use strict";

const compare = () => {
    const firstName = prompt("Введіть перше ім'я");
    const secondName = prompt("Введіть друге ім'я");
    alert('Зараз знайдемо найдовше!');
    const paragraph = document.getElementById('longest-string');
    if (firstName.replace(/ /g, '').length >= secondName.replace(/ /g, '').length) {
        paragraph.innerHTML = firstName;
    } else {
        paragraph.innerHTML = secondName;
    }
    alert('Результат на сторінці');
}
