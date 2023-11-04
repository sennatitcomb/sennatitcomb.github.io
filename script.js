const skillBubbles = document.querySelectorAll('.skill-bubble');
const skillPopup = document.querySelector('.skill-popup');
const skillPopupTitle = skillPopup.querySelector('h3');
const skillPopupDescription = skillPopup.querySelector('p');
const closePopup = skillPopup.querySelector('.close-popup');

skillBubbles.forEach((bubble) => {
    bubble.addEventListener('click', () => {
        skillPopupTitle.textContent = bubble.getAttribute('Cloud Development');
        skillPopupDescription.textContent = 'AWS (ECR, ECS, EKS, S3, Amplify, DynamoDB, Cognito, Sagemaker, VPC, EC2, IAM, Lambda, Prometheus, Grafana), Docker, Kubernetes, Terraform, Jenkins';
        skillPopup.style.display = 'block';
    });
    bubble.addEventListener('click', () => {
        skillPopupTitle.textContent = bubble.getAttribute('Human-Computer Interaction');
        skillPopupDescription.textContent = 'User Research, User Testing, Prototyping, Usability Testing, User Interviews, User Surveys, User Personas, User Stories, User Flows, Visual Design, User Interface Design, User Experience Design, User-Centered Design, Design Thinking, Waterfall, Agile, Scrum, Jira, Figma, Adobe Photoshop, Adobe Illustrator, Adobe InDesign, Git, GitHub';
        skillPopup.style.display = 'block';
    });
    bubble.addEventListener('click', () => {
        skillPopupTitle.textContent = bubble.getAttribute('Web Development');
        skillPopupDescription.textContent = 'HTML, CSS, JavaScript, React, React Native, Node.js, Express.js, User Interface Design, User Experience Design, User-Centered Design, Figma, Git, GitHub';
        skillPopup.style.display = 'block';
    });
    
});

closePopup.addEventListener('click', () => {
    skillPopup.style.display = 'none';
});
