"use strict";

const createHandlers = (imageList) => {
    for (let imageListElement of imageList) {
        let object = document.getElementById(imageListElement);
        object.onmousedown = function (e) {
            object.style.position = 'absolute';
            moveAt(e);
            document.body.appendChild(object);
            object.style.zIndex = 1000;

            function moveAt(e) {
                object.style.left = e.pageX - object.offsetWidth / 2 + 'px';
                object.style.top = e.pageY - object.offsetHeight / 2 + 'px';
            }

            document.onmousemove = function (e) {
                moveAt(e);
            }

            object.onmouseup = function () {
                document.onmousemove = null;
                object.onmouseup = null;
            }
        }
        object.ondragstart = function () {
            return false;
        };
    }
}

createHandlers(['anubarak', 'fenix', 'garrosh', 'hanzo', 'jaina', 'malfurion', 'maltael', 'tracer', 'tyranda',
    'yrel']);
