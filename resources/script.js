const projectEls = document.querySelectorAll('.projects__container__item');


projectEls.forEach(element => {
    const media = window.matchMedia('(max-width: 425px)');
    if (media.matches) {
        removeEventListener('mouseover', projectEls.forEach);
    } else {
        element.addEventListener('mouseover', function (e) {
            element.classList.add('scale-up');
        });
        element.addEventListener('mouseout', function (e) {
            element.classList.remove('scale-up');
        });
    }
});


const contactLinkEls = document.querySelectorAll('.contacts__container a');

contactLinkEls.forEach(element => {
    element.addEventListener('mouseover', function (e) {
        element.classList.add('scale-center');
    });
    element.addEventListener('mouseout', function (e) {
        element.classList.remove('scale-center');
    });
});




