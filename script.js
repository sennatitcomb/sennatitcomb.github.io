document.addEventListener('DOMContentLoaded', function () {
    const skillBubbles = document.querySelectorAll('.skill-bubble');
    const skillPopup = document.querySelector('.skill-popup');
    const skillPopupTitle = skillPopup.querySelector('h3');
    const skillPopupDescription = skillPopup.querySelector('p');
    const closePopup = skillPopup.querySelector('.close-popup');

    // Add mousemove event listener to the skills container
    const skillsContainer = document.querySelector('.skills-container');
    skillsContainer.addEventListener('mousemove', (e) => {
        skillBubbles.forEach((bubble) => {
            moveBubble(bubble, e);
        });
    });

    // Function to move a bubble
    function moveBubble(bubble, event) {
        const bubbleRect = bubble.getBoundingClientRect();
        const containerRect = skillsContainer.getBoundingClientRect();
        
        // Calculate the new position for the bubble
        const newX = event.clientX - containerRect.left - bubbleRect.width / 2;
        const newY = event.clientY - containerRect.top - bubbleRect.height / 2;
        
        // Update the bubble's position
        bubble.style.transform = `translate(${newX}px, ${newY}px)`;
    }


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
                skillPopupDescription.textContent = 'User Research, User Testing, Prototyping, Usability Testing, User Interviews, User Surveys, User Personas, User Stories, User Flows, Visual Design, User Interface Design, User Experience Design, User-Centered Design, Design Thinking, Waterfall, Agile, Scrum, Jira, Figma, Adobe Photoshop, Adobe Illustrator, Adobe InDesign, Git, GitHub';
            } else if (skillName === 'Web Development') {
                skillPopupTitle.textContent = skillName;
                skillPopupDescription.textContent = 'HTML, CSS, JavaScript, React, React Native, Node.js, Express.js, User Interface Design, User Experience Design, User-Centered Design, Figma, Git, GitHub';
            }
            
            skillPopup.style.display = 'block';
        });
    });

    closePopup.addEventListener('click', () => {
        skillPopup.style.display = 'none';
    });
}
);
