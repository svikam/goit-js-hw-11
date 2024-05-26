// функція для HTTP-запитів
'use strict';

export function searchImage(query) {
    const baseUrl = "https://pixabay.com/";
    const endPoint = "/api/";
    const params = new URLSearchParams({
        key: "44056187-241b6d2c7b447ed7c2385a3f0", //мій унікальний ключ доступу до API
        q: query, //слово для пошуку те, що буде вводити користувач
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
    })
    const url = `${baseUrl}${endPoint}?${params}`;
    return fetch(url)
        .then(response => response.json());
}