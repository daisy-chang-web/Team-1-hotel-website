const body = document.body;
const hamburger = document.getElementById('hamburger');

// Responsive Menu - Dropdown
hamburger.addEventListener('click', openMenu);
hamburger.addEventListener('mousedown', function(e){
    e.preventDefault();
});

function openMenu(){
    body.classList.toggle('show');

    if (body.classList.contains('show')) {
        hamburger.textContent = 'X';
    } else {
        hamburger.textContent = '=';
    }
}
