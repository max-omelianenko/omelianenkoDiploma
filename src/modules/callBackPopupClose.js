const callBackPopupClose = () => {

    const modalCallback = document.querySelector('.modal-callback'),
        modalOverlay = document.querySelector('.modal-overlay');

    const modalClose = () => {
        modalCallback.style.display = 'none';
        modalCallback.style.opacity = 0;
        modalOverlay.style.display = 'none';
    };

    modalCallback.addEventListener('click', (event) => {
        let target = event.target;

        if(target.hasAttribute('Alt')){
            modalClose();
        }
    });
    
    modalOverlay.addEventListener('click', () => {
        modalClose();
    });
};

export default callBackPopupClose;