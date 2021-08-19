const accordeon = () => {
    
    const accordeon = document.querySelector('.accordeon'),
        accordeonItems = accordeon.querySelectorAll('.element'),
        elementContent = accordeon.querySelectorAll('.element-content');
    
    const closeItems = () => {
        accordeonItems.forEach((elem) => {
            elem.classList.remove('active');
        });
        elementContent.forEach((elem) => {
            elem.style.display = 'none';
        });
    };

    accordeon.addEventListener('click', (event) => {
        event.preventDefault();

        let target = event.target;

        if(target.matches('.title')){
            closeItems();
            target.closest('.element').classList.add('active');
            let elementContent = target.closest('.element').querySelector('.element-content');
            elementContent.style.display = 'block';
        }
    });
};

export default accordeon;