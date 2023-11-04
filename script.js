const skillBubbles = document.querySelectorAll('.skill-bubble');
const skillPopup = document.querySelector('.skill-popup');
const skillPopupTitle = skillPopup.querySelector('h3');
const skillPopupDescription = skillPopup.querySelector('p');
const closePopup = skillPopup.querySelector('.close-popup');

skillBubbles.forEach((bubble) => {
    bubble.addEventListener('click', () => {
        skillPopupTitle.textContent = bubble.getAttribute('data-skill');
        skillPopupDescription.textContent = 'Add your detailed skill description here.';
        skillPopup.style.display = 'block';
    });
});

closePopup.addEventListener('click', () => {
    skillPopup.style.display = 'none';
});
