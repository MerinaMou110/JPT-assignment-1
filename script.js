
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('[data-collapse-toggle]');
    const mobileMenu = document.getElementById('mobile-menu-2');

    toggleButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
});



document.querySelectorAll('[data-accordion-target]').forEach(button => {
    button.addEventListener('click', () => {
        const target = document.querySelector(button.getAttribute('data-accordion-target'));
        const expanded = button.getAttribute('aria-expanded') === 'true';

        button.setAttribute('aria-expanded', !expanded);
        target.classList.toggle('hidden', expanded);
    });
});



