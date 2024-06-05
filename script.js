
const toggler = document.getElementById("toggler");
const sidebar = document.getElementById("sidebar");

document.getElementById('toggler').addEventListener('click', function () {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('hidden');
});


document.querySelectorAll('[data-accordion-target]').forEach(button => {
    button.addEventListener('click', () => {
        const target = document.querySelector(button.getAttribute('data-accordion-target'));
        const expanded = button.getAttribute('aria-expanded') === 'true';

        button.setAttribute('aria-expanded', !expanded);
        target.classList.toggle('hidden', expanded);
    });
});