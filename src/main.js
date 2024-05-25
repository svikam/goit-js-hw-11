'use strict';
// import iziToast from "izitoast";
// import "izitoast/dist/css/iziToast.min.css";
// import SimpleLightbox from "simplelightbox";
// import "simplelightbox/dist/simple-lightbox.min.css";

import searchImage from "./js/pixabay-api.js"
import { imageTemplate, imagesTemplate } from "./js/render-functions.js"

// вся логіка роботи додатка

const form = document.querySelector(".form");
// const btn = document.querySelector(".form-btn");
const gallery = document.querySelector(".gallery");

form.addEventListener("submit", event => {
    event.preventDefault();
    const userValue = event.target.elements.query.value.trim(); //те, що ввидиться в інпут користувачем
    if (userValue === "") {
        iziToast.show({
        message: 'Please enter data',
        backgroundColor: '##ffa000;',
        messageSize: '16px',
        messageColor: '#fafafb',
        messageLineHeight: '150%',
        position: 'bottomRight',
        // theme: 'light', // dark
        // icon: '',
        // iconText: '',
        // iconColor: '',    
        });
        return;
    }
    searchImage(userValue).then(data => {
        const loader = document.querySelector(".loader");
        loader.textContent = "Loading images, please wait...";
        loader.textContent = "";
        const markup = imagesTemplate(data.hits);
        gallery.innerHTML = markup;
        loader.textContent = "";
        if ( = {}) {
            iziToast.show({
            message: 'Sorry, there are no images matching your search query. Please try again!',
            backgroundColor: '#ef4040',
            messageSize: '16px',
            messageColor: '#fafafb',
            messageLineHeight: '150%',
            position: 'bottomRight',
            maxWidth: 432px,
            // theme: 'light', // dark
            // icon: '',
            // iconText: '',
            // iconColor: '',    
            });
        }
    });
});






