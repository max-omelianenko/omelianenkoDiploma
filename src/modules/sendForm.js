const sendForm = () => {
    
    const modalCallback = document.querySelector('.modal-callback'),
    formCallback = document.querySelector('form');
    
    const errorMessage = 'Что то пошло не так...',
            loadMessage = 'Загрузка...',
            successMessage = 'Спасибо! Мы скоро с вами свяжемся!';
        
    const postData = (body) => {
            
        return fetch ('./server.php', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        });
    };
    
    const statusMessage = document.createElement('div');
    
    const deleteMessage = () => {
        statusMessage.textContent = '';
    };
    
    statusMessage.style.cssText = 'font-size: 2rem; color: #e9bb26';
    formCallback.addEventListener('submit', (event) => {
        event.preventDefault();
        formCallback.appendChild(statusMessage);
        statusMessage.textContent = loadMessage;
        const formData = new FormData(formCallback);
        
        postData(formData)
            .then((response) => {
                if (response.status !== 200){
                    throw new Error ('status network not 200');
                } 
                statusMessage.textContent = successMessage;
                formCallback.reset();
            })
            .catch((error) => {
                statusMessage.textContent = errorMessage;
                console.error(error);
            })
            .finally(() => {
                setTimeout(deleteMessage, 5000);
            });
    });
    
    console.log('modalCallback: ', modalCallback);
    console.log('formCallback: ', formCallback);

};

export default sendForm;