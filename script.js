let menuIcon = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
let sections = document.querySelectorAll('section');

let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');
};
ScrollReveal({ 
    reset: true,
    distance:'80px',
    duration: 2000,
    delay: 200
 });
 ScrollReveal().reveal('.Home-content, .heading', { origin:'top' });
ScrollReveal().reveal('.Home-img, .Skills-container, .Contact-form', {origin:'bottom'});
ScrollReveal().reveal('.Home-content h1, .About-img',{origin:'left'});
ScrollReveal().reveal('.Home-content p, .About-content',{origin:'right'});
const typed = new Typed('.multiple-text', { strings: ['Student.','Learner.','Undergraduate.'],
typeSpeed:100,
backSpeed:50,
backDelay: 1000,
loop:true
});