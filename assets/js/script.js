const aos_container = document.querySelectorAll('.section-header');
const wrapper = document.querySelector('div[name="information"]');
for (let i = 0; i < aos_container.length; i++) {
    checkActive(i)
    wrapper.querySelector('.row').addEventListener('scroll', (e) => {
        checkActive(i)
    })
}

function checkActive(i) {
    const positionY = aos_container[i].getBoundingClientRect().top - (wrapper.clientHeight/1.25);
    aos_container[i].style.position = 'relative';
    if (positionY <= 0) {
        aos_container[i].classList.add('active');
    } else {
        aos_container[i].classList.remove('active');
    }
}