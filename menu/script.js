document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.nav-items').classList.toggle('open')
    document.querySelector('.hamburger').classList.toggle('checked');
});