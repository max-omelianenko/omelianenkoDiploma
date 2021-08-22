'use strict';

import mainSlider from './modules/mainSlider';
//import carousel from './modules/carousel';
import accordeon from './modules/accordeon';
import carouselAnother from './modules/carouselAnother';
import up from './modules/up';
import sendForm from './modules/sendForm';
import callBackPopupOpen from './modules/callBackPopupOpen';
import callBackPopupClose from './modules/callBackPopupClose';
import smoothScroll from './modules/smoothScroll';

const callbackBtn = document.querySelectorAll('.callback-btn'),
    callbackBtnServ = document.querySelector('.button-services'),
    servicesCarousel = document.querySelector('.services-carousel'),
    servicesItem = servicesCarousel.querySelectorAll('.element');

mainSlider();
//carousel();
carouselAnother();
callBackPopupClose();
smoothScroll();
accordeon();
up();
sendForm();

callBackPopupOpen(callbackBtnServ);
callBackPopupOpen(callbackBtn[1]);
servicesItem.forEach((elem) => {
    callBackPopupOpen(elem);
});