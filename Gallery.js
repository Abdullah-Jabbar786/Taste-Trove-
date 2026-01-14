document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting){
                entry.target.classList.add('fade-in');
            }
        });
    });
    const items = document.querySelectorAll('.menu-item, .staff-item, .customer-item');
    items.forEach(item => observer.observe(item));
});