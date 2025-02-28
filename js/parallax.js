// Smooth and deep parallax effect on hero image
const heroImage = document.getElementById('hero-image');

heroImage.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = heroImage.getBoundingClientRect();
    const xPos = ((clientX - left) / width - 0.5) * 40; // Adjust sensitivity
    const yPos = ((clientY - top) / height - 0.5) * 40;

    heroImage.style.transform = `perspective(1000px) rotateX(${-yPos}deg) rotateY(${xPos}deg) scale(1.1)`;
    heroImage.style.transition = 'transform 0.1s ease-out'; // Smooth transition
});

heroImage.addEventListener('mouseleave', () => {
    heroImage.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
    heroImage.style.transition = 'transform 0.5s ease-out'; // Smooth reset
});
