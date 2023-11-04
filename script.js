// script.js
const skillsSection = document.getElementById('skills');
const skillsList = document.querySelector('.skills-list');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            skillsSection.classList.add('in-view');
        }
    });
});

observer.observe(skillsSection);
