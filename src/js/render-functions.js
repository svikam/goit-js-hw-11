'use strict';

// функції для відображення елементів інтерфейсу

function imageTemplate(image) {
    return `<li class="gallery-item">
    <img src="${image.previewURL}" alt="image"/>
    </li>`
}

function imagesTemplate(arr) {
    return arr.map(imageTemplate).join("");
}

export { imageTemplate, imagesTemplate };