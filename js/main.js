gsap.from('body', {
    duration: 2,
    backgroundColor: 'white'
});

gsap.from('#title-header', {
    duration: 1,
    opacity: 0,
    y: -20,
    delay: 1.25
});

gsap.from('.intro', {
    duration: 0.75,
    opacity: 0,
    y: -20,
    delay: 1.5
});

gsap.from('header img', {
    opacity: 0,
    duration: 1,
    delay: 3
});

gsap.from('header h2', {
    opacity: 0,
    duration: 1,
    delay: 3
});

gsap.from('ul li', {
    duration: 0.75,
    opacity: 0,
    y: -30,
    stagger: 0.35,
    delay: 4
});