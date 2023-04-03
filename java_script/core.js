let counter = 0;
document.querySelector('[data-range]').addEventListener('change', () => {counter = 0; counter++}); 
const draw = document.querySelector('.draw');

let size = 32;
setInterval(() => {
    const showSize = Number(document.querySelector('[data-range]').value);
    const res = document.querySelectorAll('[data-res]');

    if (showSize === 0) {   
        if (counter === 1) {append(); clear()};
        size = 8; counter = 0; 
        draw.setAttribute('id', 'draw1');
    } else if (showSize === 50) {
        if (counter === 1) {append(); clear()};
        counter = 0; size = 16; 
        draw.setAttribute('id', 'draw2');
    } else if (showSize === 100) {
        if (counter === 1) {append(); clear()};
        counter = 0; size = 32; 
        draw.setAttribute('id', 'draw3');
    };
    res.forEach(item => item.textContent = size);
}, 100);

function append() {
    const html = '<div class="draw-block"></div>';
    for (let i = 0; i <= `${size}` * `${size}`; i++) { 
        draw.insertAdjacentHTML('beforeend', html);
    };
}; append();

function clear() {
    drawBlock.forEach((item) => {
        item.style['background-color'] = `#fff`;
    });
}

let color = '#000';
const colorInput = document.querySelector('[data-color]');
colorInput.addEventListener('change', () => {
    color = colorInput.value;
});

const drawBlock = document.querySelectorAll('.draw-block');
drawBlock.forEach(item => {
    item.addEventListener('mouseover', function() {
        item.style['background-color'] = `${color}`;
    });
});

document.querySelector('[data-clear]').onclick = () => clear();
document.querySelector('[data-eraser]').onclick = () => color = '#fff';