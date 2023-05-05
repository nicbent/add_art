import Alpine from 'alpinejs'
import collapse from '@alpinejs/collapse'
import persist from '@alpinejs/persist'
import focus from '@alpinejs/focus'
import 'focus-visible'

import Splide from '@splidejs/splide';

import '@splidejs/splide/css/core';


var splide = new Splide( '.splide', {
    perPage: 4,
    rewind : true,
    gap: '0.5rem',
    height: '682px'
  } );
  
  splide.mount();

// Global get CSRF token function (used by forms).
window.getToken = async () => {
    return await fetch('/!/statamic-peak-tools/dynamic-token/refresh')
        .then((res) => res.json())
        .then((data) => {
            return data.csrf_token
        })
        .catch(function (error) {
            this.error = 'Something went wrong. Please try again later.'
        })
}


