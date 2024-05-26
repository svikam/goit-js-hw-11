// функції для відображення елементів інтерфейсу
'use strict';

export function imageRender(image) {
    return `
    <li class="gallery-item">
        <a href="${image.largeImageURL}">
            <img src="${image.webformatwURL}" alt="${image.tags}"/>
            <p class="info-title">Likes:<span class="info-value> ${image.likes}</p>
                <p class="info-title">Views:<span class="info-value> ${image.views}</p>
                <p class="info-title">Coments:<span class="info-value> ${image.comments}</p>
                <p class="info-title">Downloads:<span class="info-value> ${image.downloads}</p>           
        </a>>
    </li>`
}

export function imagesRender(arr) {
    return arr.map(imageRender).join("");
}





// export { imageTemplate, imagesTemplate };