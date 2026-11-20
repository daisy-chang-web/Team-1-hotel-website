const body = document.body;
const hamburger = document.getElementById('hamburger');
const closeMenuButton = document.getElementById('close-menu');

if (hamburger) {
    hamburger.addEventListener('click', toggleMenu);
    hamburger.addEventListener('mousedown', function(e){
        e.preventDefault();
    });
}

if (closeMenuButton) {
    closeMenuButton.addEventListener('click', closeMenu);
}

function toggleMenu(){
    const isOpen = body.classList.toggle('show');
    if (hamburger) {
        hamburger.setAttribute('aria-expanded', String(isOpen));
        hamburger.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
    }
}

function closeMenu(){
    body.classList.remove('show');
    if (hamburger) {
        hamburger.setAttribute('aria-expanded', 'false');
        hamburger.setAttribute('aria-label', 'Open navigation');
    }
}
