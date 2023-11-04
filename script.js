const skillBubbles = document.querySelectorAll('.skill-bubble');
const skillPopup = document.querySelector('.skill-popup');
const skillPopupTitle = skillPopup.querySelector('h3');
const skillPopupDescription = skillPopup.querySelector('p');
const closePopup = skillPopup.querySelector('.close-popup');

skillBubbles.forEach((bubble) => {
    bubble.addEventListener('click', () => {
        skillPopupTitle.textContent = bubble.getAttribute('Cloud Development');
        skillPopupDescription.textContent = 'AWS (ECR, ECS, EKS, S3, Amplify, DynamoDB, Cognito, Sagemaker, VPC, EC2, IAM, Lambda, Prometheus, Grafana), Docker, Kubernetes, Terraform';
        skillPopup.style.display = 'block';
    });
});

closePopup.addEventListener('click', () => {
    skillPopup.style.display = 'none';
});
