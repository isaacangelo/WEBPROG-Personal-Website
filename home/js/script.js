document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.content');
    const navLinks = document.querySelectorAll('nav ul li a');
    const contentContainer = document.getElementById('content-container');
    const progressBar = document.getElementById('progress-bar');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetSection = document.getElementById(link.getAttribute('data-section'));
            sections.forEach(section => section.classList.remove('active'));
            targetSection.classList.add('active');
            contentContainer.style.transform = 'translateX(-100%)';
            contentContainer.style.opacity = '0';
            setTimeout(() => {
                contentContainer.style.transform = 'translateX(0)';
                contentContainer.style.opacity = '1';
            }, 500);
            window.scrollTo({ top: 0, behavior: 'smooth' });

            // Update progress bar
            const sectionIndex = Array.from(sections).indexOf(targetSection);
            const progress = (sectionIndex / (sections.length - 1)) * 100;
            progressBar.style.width = progress + '%';
        });
    });

    // Show the "Home" section by default
    document.getElementById('home').classList.add('active');

    // Handle form submission
    const feedbackForm = document.getElementById('feedback-form');
    feedbackForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const rating = document.getElementById('rating').value;
        const comments = document.getElementById('comments').value;
        alert(`Thank you for your review!`);
        feedbackForm.reset();

        // Smooth transition back to the Home page
        document.querySelector('a[data-section="home"]').click();
    });

    // Handle image zoom
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('zoomed');
        });
    });
});