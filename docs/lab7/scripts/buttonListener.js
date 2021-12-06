"use strict";

const showInfo = () => {
  alert('Найпопулярніші предмети - це граблі та кайло');
}

const changeHiddenValue = () => {
  const image = document.getElementById('item-image');
  image.hidden = !image.hidden;
}
