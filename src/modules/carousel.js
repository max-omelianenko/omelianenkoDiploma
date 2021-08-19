const carousel = () => {

    const servicesCarousel = document.querySelector('.services-carousel'),
        servicesItem = servicesCarousel.querySelectorAll('.element'),
        servicesArrow = document.querySelector('.services-arrow');
    
    const rows =[], 
    servicesItemArr = [],
    size = 3;
    
    let currentRow = 0;

    servicesItem.forEach((elem, index) => {
        servicesItemArr[index] = elem;
    });

    for (let i = 0; i <Math.ceil(servicesItemArr.length/size); i++){
        rows[i] = servicesItemArr.slice((i*size), (i*size) + size);
    }

    const prevRow = (elem, index, strDisplay) => {
        elem[index].forEach((elem) => {
            elem.style.display = strDisplay;
        });
    };

    const nextRow = (elem, index, strDisplay) => {
        elem[index].forEach((elem) => {
            elem.style.display = strDisplay;
        });
    };
    
    prevRow(rows, 1, 'none');

    servicesArrow.addEventListener('click', (event) => {
        event.preventDefault();

        let target = event.target;

        prevRow(rows, currentRow, 'none');

        if(target.matches('.arrow-right')){
            currentRow++;
        } else if (target.matches('.arrow-left')){
            currentRow--;
        }
        if (currentRow >= rows.length){
            currentRow = 0;
        }
        if (currentRow < 0){
            currentRow = rows.length - 1;
        }
        nextRow(rows, currentRow, 'block');
    });
};

export default carousel;