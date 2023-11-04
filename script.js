// script.js

const rainbow = document.getElementById('rainbow');

document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    rainbow.style.left = `${x}px`;
    rainbow.style.top = `${y}px`;
});
