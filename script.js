document.addEventListener('DOMContentLoaded', function () {
    const skillBubbles = document.querySelectorAll('.skill-bubble');
    const skillPopup = document.querySelector('.skill-popup');
    const skillPopupTitle = skillPopup.querySelector('h3');
    const skillPopupDescription = skillPopup.querySelector('p');
    const closePopup = skillPopup.querySelector('.close-popup');

    skillBubbles.forEach((bubble) => {
        bubble.addEventListener('click', () => {
            // Get the skill name from the data-skill attribute of the clicked bubble
            const skillName = bubble.getAttribute('data-skill');
            
            // Set the title and description based on the skill name
            if (skillName === 'Cloud Development') {
                skillPopupTitle.textContent = skillName;
                skillPopupDescription.textContent = 'AWS (ECR, ECS, EKS, S3, Amplify, DynamoDB, Cognito, Sagemaker, VPC, EC2, IAM, Lambda, Prometheus, Grafana), Docker, Kubernetes, Terraform, Jenkins';
            } else if (skillName === 'Human-Computer Interaction') {
                skillPopupTitle.textContent = skillName;
                skillPopupDescription.textContent = 'User Research, User Testing, Prototyping, Usability Testing, User Interviews, User Surveys, User Personas, User Stories, User Flows, Visual Design, User Interface Design, User Experience Design, User-Centered Design, Design Thinking, Waterfall, Agile, Scrum, Jira, Figma, Adobe Photoshop, Adobe Illustrator, Git, GitHub';
            } else if (skillName === 'UI Design') {
                skillPopupTitle.textContent = skillName;
                skillPopupDescription.textContent = 'User Interface Design, User Experience Design, User-Centered Design, Design Thinking, Figma, Adobe Photoshop';
            }else if (skillName === 'UX Design') {
                skillPopupTitle.textContent = skillName;
                skillPopupDescription.textContent = 'User Research, User Testing, Prototyping, Usability Testing, User Interviews, User Surveys, User Personas, User Stories, User Flows';
            }else if (skillName === 'Web Development') {
                skillPopupTitle.textContent = skillName;
                skillPopupDescription.textContent = 'HTML, CSS, JavaScript, React, React Native, Node.js, Express.js, User Interface Design, User Experience Design, User-Centered Design, Figma, Git, GitHub';
            }else if (skillName === 'Programming Languages') {
                skillPopupTitle.textContent = skillName;
                skillPopupDescription.textContent = 'Python, JavaScript, Java, C++, C, SQL, HTML, CSS';
            }else if (skillName === 'Software Development') {
                skillPopupTitle.textContent = skillName;
                skillPopupDescription.textContent = 'Waterfall, Agile, Jira, Github, SDLC';
            }else if (skillName === 'Project Management') {
                skillPopupTitle.textContent = skillName;
                skillPopupDescription.textContent = 'Leadership, Waterfall, Agile, Scrum, Jira, Github, SDLC';
            }

            skillPopup.style.display = 'block';
        });
    });

    closePopup.addEventListener('click', () => {
        skillPopup.style.display = 'none';
    });

// JavaScript for the flipbook effect
const gallery = document.querySelector('.photo-gallery');
let isDragging = false;
let startPosition = 0;
let currentTranslate = 0;
let prevTranslate = 0;
let animationID = 0;

// Add event listeners to detect mouse drag
gallery.addEventListener('mousedown', (e) => startDragging(e));
gallery.addEventListener('mousemove', (e) => drag(e));
gallery.addEventListener('mouseup', () => endDragging());
gallery.addEventListener('mouseleave', () => endDragging());

function startDragging(e) {
  isDragging = true;
  startPosition = e.pageX - gallery.offsetLeft;
  prevTranslate = currentTranslate;
  if (animationID) {
    cancelAnimationFrame(animationID);
  }
}

function drag(e) {
  if (isDragging) {
    const currentPosition = e.pageX - gallery.offsetLeft;
    currentTranslate = prevTranslate + currentPosition - startPosition;
  }
}

function endDragging() {
  isDragging = false;
  const threshold = gallery.clientWidth / 4;
  if (Math.abs(currentTranslate) > threshold) {
    if (currentTranslate > 0) {
      // Move to the previous image
      navigate(-1);
    } else {
      // Move to the next image
      navigate(1);
    }
  } else {
    // Snap back to the current image
    navigate(0);
  }
}

function navigate(direction) {
  const cardWidth = gallery.firstElementChild.offsetWidth;
  currentTranslate = direction * cardWidth;
  // Smooth animation when navigating
  const moveCards = () => {
    currentTranslate -= currentTranslate * 0.1;
    setTransform(currentTranslate);
    if (Math.abs(currentTranslate) < 1) return;
    animationID = requestAnimationFrame(moveCards);
  };
  moveCards();
}

function setTransform(translate) {
  gallery.style.transform = `translateX(${translate}px)`;
}

}
);
