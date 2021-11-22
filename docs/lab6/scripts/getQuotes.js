"use strict";

const getQuotes = () => {
    let quotes = '';
    let spans = document.getElementsByTagName("SPAN");
    for (const span of spans) {
        quotes += span.childNodes[0].nodeValue + '\n';
    }
    alert(quotes);
}
