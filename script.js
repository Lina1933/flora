const menuToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('.nav-list');

if (menuToggle && navList) {
    menuToggle.addEventListener('click', () => {
        navList.classList.toggle('active');
    });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});