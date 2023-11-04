// script.js

const bg = document.getElementById('bg');

function createBlueSquare() {
    const blueSquare = document.createElement('div');
    blueSquare.classList.add('blue-square');
    blueSquare.style.left = `${Math.random() * 100}vw`;
    bg.appendChild(blueSquare);

    const animationDuration = (Math.random() + 1) * 5; // Adjust the speed of falling squares
    blueSquare.style.animation = `fall ${animationDuration}s linear`;

    blueSquare.addEventListener('animationend', () => {
        blueSquare.remove();
    });
}

setInterval(createBlueSquare, 1000); // Adjust the interval as needed
