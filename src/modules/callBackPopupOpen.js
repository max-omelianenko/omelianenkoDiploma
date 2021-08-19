const callBackPopupOpen = (elem) => {

    const modalCallback = document.querySelector('.modal-callback'),
        modalOverlay = document.querySelector('.modal-overlay');

    const fadeIn = (el, speed) => {
        let step = 1 / speed;
        let interval = setInterval(function() {
            if (el.style.opacity >= 1) {
                clearInterval(interval);
            }
            el.style.opacity = +el.style.opacity + step;
        }, speed / 1000);
    };

    elem.addEventListener('click', () => {
        fadeIn(modalCallback, 50);
        modalCallback.style.display = 'block';
        modalOverlay.style.display = 'block';
    });
};

export default callBackPopupOpen;