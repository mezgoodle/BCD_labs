"use strict";

const changeQuotesStyle = () => {
    let spans = document.querySelectorAll('span');
    for (const span of spans) {
        if (span.style.textDecorationLine === 'underline') span.style.textDecorationLine = 'none';
        else span.style.textDecorationLine = 'underline';
    }
}

const changeHeaderText = () => {
    let header = document.getElementsByTagName('h2')[0];
    header.outerHTML = '<h1>Більші цитати князя Артура!</h1>';
}
