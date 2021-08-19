'use strict';

import mainSlider from './modules/mainSlider';
import carousel from './modules/carousel';
import callBackPopupOpen from './modules/callBackPopupOpen';
import callBackPopupClose from './modules/callBackPopupClose';
import smoothScroll from './modules/smoothScroll';

const callbackBtn = document.querySelectorAll('.callback-btn'),
    callbackBtnServ = document.querySelector('.button-services'),
    servicesCarousel = document.querySelector('.services-carousel'),
    servicesItem = servicesCarousel.querySelectorAll('.element');

mainSlider();
carousel();
callBackPopupClose();
smoothScroll();

callBackPopupOpen(callbackBtnServ);
callBackPopupOpen(callbackBtn[1]);
servicesItem.forEach((elem) => {
    callBackPopupOpen(elem);
});