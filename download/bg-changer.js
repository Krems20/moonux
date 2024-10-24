const gradients = [
    'linear-gradient(135deg, #7ed957, #55aaff)',
    'linear-gradient(135deg, #ff4757, #1e90ff)',
    'linear-gradient(135deg, #1e90ff, #ff7eb3)',
    'linear-gradient(135deg, #ff7eb3, #7ed957)',
    'linear-gradient(135deg, #2588F4, #25F4B0)',
    'linear-gradient(135deg, #7ed957, #55aaff)',
    'linear-gradient(135deg, #ff4757, #1e90ff)',
    'linear-gradient(135deg, #1e90ff, #ff7eb3)',
    'linear-gradient(135deg, #ff7eb3, #7ed957)',
    'linear-gradient(135deg, #2588F4, #25F4B0)',
    'linear-gradient(135deg, #7ed957, #55aaff)',
    'linear-gradient(135deg, #ff4757, #1e90ff)',
    'linear-gradient(135deg, #1e90ff, #ff7eb3)',
    'linear-gradient(135deg, #ff7eb3, #7ed957)',
    'linear-gradient(135deg, #2588F4, #25F4B0)',
    'linear-gradient(135deg, #7ed957, #55aaff)',
    'linear-gradient(135deg, #ff4757, #1e90ff)',
    'linear-gradient(135deg, #1e90ff, #ff7eb3)',
    'linear-gradient(135deg, #ff7eb3, #7ed957)',
    'linear-gradient(135deg, #2588F4, #25F4B0)',
    'linear-gradient(135deg, #7ed957, #55aaff)',
    'linear-gradient(135deg, #ff4757, #1e90ff)',
    'linear-gradient(135deg, #1e90ff, #ff7eb3)',
    'linear-gradient(135deg, #ff7eb3, #7ed957)',
    'linear-gradient(135deg, #2588F4, #25F4B0)',
    'linear-gradient(135deg, #7ed957, #55aaff)',
    'linear-gradient(135deg, #ff4757, #1e90ff)',
    'linear-gradient(135deg, #1e90ff, #ff7eb3)',
    'linear-gradient(135deg, #ff7eb3, #7ed957)',
    'linear-gradient(135deg, #2588F4, #25F4B0)',
];

let currentIndex = 0;
const background1 = document.getElementById('background1');
const background2 = document.getElementById('background2');

function changeBackground() {
    const newBackground = currentIndex % 2 === 0 ? background1 : background2;
    const oldBackground = currentIndex % 2 === 0 ? background2 : background1;
    newBackground.style.background = gradients[currentIndex];
    newBackground.style.opacity = '1';
    oldBackground.style.opacity = '0';
    currentIndex = (currentIndex + 1) % gradients.length;
}

setInterval(changeBackground, 3000);
changeBackground();
