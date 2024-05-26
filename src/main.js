'use strict';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { searchImage } from "./js/pixabay-api.js"
import { imagesRender } from "./js/render-functions.js"

const form = document.querySelector(".form");
const gallery = document.querySelector(".gallery");
const loader = document.querySelector(".loader");

hideLoader();

form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
    event.preventDefault();
    const query = event.target.elements.query.value.trim(); //те, що ввидиться в інпут користувачем
    if (!query) {
        iziToast.show({
            message: 'Please enter data',
            backgroundColor: '##ffa000;',
            messageSize: '16px',
            messageColor: '#fafafb',
            messageLineHeight: '150%',
            position: 'bottomRight',
        });
        return;
    }
    gallery.innerHTML = "";
    showLoader();
    searchImage(query)
        .then(data => {
            const markup = imagesRender(data.hits);
            if (data.hits.length === 0) {
                iziToast.show({
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                    backgroundColor: '#ef4040',
                    messageSize: '16px',
                    messageColor: '#fafafb',
                    messageLineHeight: '150%',
                    position: 'bottomRight',
                });
            } else {
                gallery.innerHTML = markup;
                const lightbox = new SimpleLightbox('.gallery a', {
                    captionsData: 'alt',
                    captionDelay: 250
                });
                lightbox.refresh();
            }
    });
}

function showLoader() {
    loader.style.display = 'block';
}

function hideLoader() {
    loader.style.display = 'none';
}
