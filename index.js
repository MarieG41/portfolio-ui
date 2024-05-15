let switcher = document.querySelector('input');
let body = document.body;

switcher.addEventListener('click', function() {
    body.classList.toggle('dark');
})