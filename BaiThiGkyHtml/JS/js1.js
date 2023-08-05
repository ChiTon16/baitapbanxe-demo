const data = [
    [
        {id: 1, thumbnail: '/IMG/Lamborred.jpg', color: 'red', title: 'Lambor'},
        {id: 2, thumbnail: '/IMG/lamborblue.jpg', color: 'blue', title: 'Lambor'},
        {id: 3, thumbnail: '/IMG/lamboryellow.jpg', color: 'yellow', title: 'Lambor'},
        {id: 4, thumbnail: '/IMG/lamborwhite.jpg', color: 'white', title: 'Lambor'},
    ],
    [
        {id: 1, thumbnail: '/IMG/ferrarired.jpg', color: 'red', title: 'Fera'},
        {id: 2, thumbnail: '/IMG/ferrariblue.jpg', color: 'blue', title: 'Fera'},
        {id: 3, thumbnail: '/IMG/ferrariyellow.jpg', color: 'yellow', title: 'Fera'},
        {id: 4, thumbnail: '/IMG/ferrariwhite.jpg', color: 'white', title: 'Fera'},
    ]
];

function Run() {
    document.addEventListener("DOMContentLoaded", () => {
        const selectCartElem = document.getElementById('selection-xe');
        const boxImagesElem = document.querySelector('.box-images');
        const listColorElem = document.querySelectorAll('.color-box');
        const imageElem = document.getElementById('image-container');
        const quantityElem = document.getElementById('quantity');
        const resultElem = document.getElementById('Result');
        const orderElem = document.getElementById('order');
        
        const renderImages = (value) => {
            boxImagesElem.innerHTML = data[value].map(item=> `<img src="${item.thumbnail}" alt="${item.title}" class="imgcar">`).join('');
        }
    
        const showImage = (value) => {
            const elem = data[Number(selectCartElem.value)].find(item => item.color === value);
            imageElem.innerHTML = `<img src="${elem.thumbnail}" alt="${elem.title}" id="image-cars">`;
        }
    
        selectCartElem.onchange = (e) => {
            const colorElem = document.querySelector('.color-box.active');
            renderImages(Number(e.target.value));
            showImage(colorElem.value);
        }
    
        listColorElem.forEach(item => {
            item.onclick = (e) => {
                showImage(e.target.value);
                listColorElem.forEach(elem => {
                    elem !== item ? elem.classList.remove('active') : elem.classList.add('active');
                });
            }
        });
    
        orderElem.onclick = () => {
            const colorElem = document.querySelector('.color-box.active');
            resultElem.innerHTML = `Bạn đặt mua ${quantityElem.value} xe ${selectCartElem.value === '0' ? 'Lamborghini' : 'Ferrari'} màu ${colorElem.value}`;
        }
    });
    return false;
}

Run();