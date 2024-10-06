// Adding scroll animations or interactive features
document.querySelector('.cta-button').addEventListener('click', function() {
    window.scrollTo({
        top: document.querySelector('.features').offsetTop,
        behavior: 'smooth'
    });
});
