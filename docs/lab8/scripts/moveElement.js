"use strict";

let from = '',
    to = '';

const createHandlers = (imageList) => {
    for (let imageListElement of imageList) {
        let object = document.getElementById(imageListElement);
        object.style.zIndex = 1000;
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
                alert(`Ви перемістили героя ${to} з лінії ${from}`);
            }
        }
        object.ondragstart = function () {
            return false;
        };
    }
}

const areaHandlers = () => {
    const top = document.getElementById('top'),
        middle = document.getElementById('middle'),
        bottom = document.getElementById('bottom');
    for (const object of [top, middle, bottom]) {
        object.addEventListener('mouseover', overListener);
        object.addEventListener('mouseout', outListener);
    }
}

function outListener(event) {
    let related = event.relatedTarget ? event.relatedTarget.id : "unknown";
    from = event.target.id;
    to = related;
}

function overListener(event) {
    let related = event.relatedTarget ? event.relatedTarget.id : "unknown";
    to = event.target.id;
    from = related;
}

createHandlers(['anubarak', 'fenix', 'garrosh', 'hanzo', 'jaina', 'malfurion', 'maltael', 'tracer', 'tyranda',
    'yrel']);
areaHandlers();
