const mainSlider = () => {

    const slide = document.querySelectorAll('.item'),
        slider = document.querySelector('.top-slider');
        
    
    const sliderContent = [],
        sliderText = [];

    let currentSlide = 0, 
        interval;
        
    const prevSlide = (elem, index, strClass) => {
        elem[index].classList.remove(strClass);
    };

    const nextSlide = (elem, index, strClass) => {
        elem[index].classList.add(strClass);
    };

    const prevSlideContent = (elem, index) => {
        elem[index].style.display = 'none';
    };

    const nextSlideContent = (elem, index) => {
        elem[index].style.display = 'inline-block';
    };

    const autoPlaySlide = () => {
        prevSlide(slide, currentSlide, 'item');
        prevSlide(sliderContent, currentSlide, 'active');
        prevSlideContent(sliderText, currentSlide);
        
        currentSlide++;
        if (currentSlide >= slide.length){
            currentSlide = 0;
        }
        nextSlide(slide, currentSlide, 'item');
        nextSlide(sliderContent, currentSlide, 'active');
        nextSlideContent(sliderText, currentSlide);
    };

    const startSlide = (time = 3000) => {
        interval = setInterval(autoPlaySlide, time);
    };

    const stopSlide = () => {
        clearInterval(interval);
    };

    slide.forEach((elem, index) => {
        sliderContent[index] = elem.querySelector('.table');
        sliderText[index] = elem.querySelector('.container');
    });
    sliderContent[0].classList.add('active');

    sliderContent.forEach((elem) => {
        elem.style.position = 'absolute';
    });
    
    slider.addEventListener('mouseover', (event) => {
        if(event.target.matches('.item')){
            stopSlide();
        }
    });

    slider.addEventListener('mouseout', (event) => {
        if(event.target.matches('.item')){
            startSlide();
        }
    });
    startSlide();
};

export default mainSlider;