"use strict";

class Hidden {
  image = document.getElementById('item-image');
  handleEvent(event) {
    switch (this.image.hidden) {
      case true:
        alert(`Ви здійснили метод "${event.type}" на об\'єкті ${event.currentTarget}. Тепер картинку не видно.`);
        break;
      case false:
        alert(`Ви здійснили метод "${event.type}" на об\'єкті ${event.currentTarget}. Тепер картинку видно.`);
        break;
    }
  }
}

const showInfo = () => {
  alert('Найпопулярніші предмети - це граблі та кайло');
}

const changeHiddenValue = () => {
  const image = document.getElementById('item-image');
  image.hidden = !image.hidden;
}
