document.querySelectorAll('.slider-nav a').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault(); // Mencegah perpindahan layar

        const targetId = this.getAttribute('href'); // Ambil ID target
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    });
});
