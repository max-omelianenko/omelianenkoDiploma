const sendForm = () => {
    
    const modalCallback = document.querySelector('.modal-callback'),
    formCallback = document.querySelector('form'),
    allInput = modalCallback.querySelectorAll('input');
    
    const errorMessage = 'Ошибка',
            loadMessage = 'Отправка сообщения',
            successMessage = 'Отправлено, ожидайте звонка!';

    let stringModify,
        nameData,
        phoneData;   

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
        allInput.forEach((elem) => {
            if (elem.getAttribute('name') === 'fio'){
                nameData = elem.value;
            } else if (elem.getAttribute('name') === 'tel'){
                phoneData = elem.value;
            }
        });
        const formData = {
            name: nameData,
            phone: phoneData
        };

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
    // ------------- Проверка полей ввода-------------
    
    const stringTrim = (elem) => {
        elem = elem.replace(/\-+/g, '-');
        elem = elem.replace(/\s+/g, ' ').trim();
        elem = elem.replace(/^\-/g, '');
        elem = elem.replace(/\-$/g, '');
        return elem;
    };

    const toUpper = (str) => {
        if(str){
            return str
            .toLowerCase()
            .split(' ')
            .map(function(word) {
                return word[0].toUpperCase() + word.substr(1);
            })
            .join(' ');
        } else {
            str = '';
            return str;
        }
    };

    allInput.forEach((elem) => {
        if (elem.getAttribute('name') === 'fio'){
            elem.addEventListener('blur', (e) => {
                stringModify = e.target.value;
                stringModify = stringModify.replace(/[^?!,.\-а-яё\s]/ig, '');
                stringModify = stringTrim(stringModify);
                stringModify = toUpper(stringModify);
                e.target.value = stringModify;
            });
        } else if (elem.getAttribute('name') === 'tel'){
            elem.setAttribute('required', true);
            elem.addEventListener('blur', (e) => {
                stringModify = e.target.value;
                stringModify = stringModify.replace(/[^\-()0-9]/ig, '');
                stringModify = stringTrim(stringModify);
                stringModify = '+' + stringModify;
                stringModify = stringModify.match(/\+?[78]([-()]*\d){10}/g);
                e.target.value = stringModify; 
            });
        } 
    });
};

export default sendForm;