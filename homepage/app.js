document.addEventListener('DOMContentLoaded', () => {
    const rightHand = document.querySelector('.hand-right');
    const leftHand = document.querySelector('.hand-left');
    const leftHand2 = document.querySelector('.hand-left2');
    const mar = document.getElementById('mark')
    const nektext = document.getElementById('nekotext')
    const rightHand2 = document.querySelector('.hand-right2');
    const heading = document.querySelector('h3');

    const animations = [];
    const animations2 = [];
    const animations3 = [];
    let lastScrollY = window.scrollY;
    let ticking = false;

    //?Services

    const servicesSection = document.getElementById('services');

    // IntersectionObserver tanımlıyoruz
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateServicesList();
                fadeInOnScroll();
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5
    });

    observer.observe(servicesSection);
    function fadeInOnScroll() {
        const fadeEls = document.querySelectorAll('.fade-on-scroll');

        fadeEls.forEach(el => {
            const rect = el.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            if (rect.top < windowHeight - 50 && rect.bottom > 0) {
                anime({
                    targets: el,
                    opacity: [0, 1],
                    translateX: [40, 0],
                    duration: 1000,
                    easing: 'easeOutQuad'
                });
            }
        });
    }

    function animateServicesList() {
        const servicesSection = document.getElementById('services');
        const rect = servicesSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top < windowHeight - 100 && rect.bottom > 0) {
            const items = servicesSection.querySelectorAll('li');
            items.forEach((item, index) => {
                anime({
                    targets: item,
                    opacity: [0, 1],
                    translateX: [40, 0],
                    delay: anime.stagger(150 * index), // Animasyonları sırayla başlat
                    duration: 800,
                    easing: 'easeOutExpo'
                });
            });
        }
    }

    //?Services

    //* Public Animation

    const handAnimation = anime({
        targets: rightHand,
        translateX: [1200, 0],
        opacity: [0, 1],
        easing: 'easeOutQuad',
        duration: 2000,
        autoplay: false
    });
    animations.push(handAnimation);

    const handAnimation2 = anime({
        targets: rightHand2,
        translateX: [1800, 900],
        easing: 'easeOutQuad',
        duration: 2000,
        autoplay: false
    });
    animations3.push(handAnimation2);

    const nekotext  = anime({
        targets: nektext,
        translateX: [800, -10],
        opacity: [0, 1],
        easing: 'easeOutQuad',
        duration: 2000,
        autoplay: false
    });

    animations3.push(nekotext);

    const handAnimation3 = anime({
        targets: leftHand,
        translateX: [-1200, -300],
        opacity: [0, 1],
        easing: 'easeOutQuad',
        duration: 2000,
        autoplay: false
    });
    animations.push(handAnimation3);

    const handAnimation4 = anime({
        targets: [leftHand2, mar],
        translateX: [-400, 400],
        opacity: [0, 1],
        easing: 'easeOutQuad',
        duration: 2000,
        autoplay: false
    });
    animations2.push(handAnimation4);

    // Metin animasyonu
    const textAnimation = anime({
        targets: heading,
        translateX: [-1400, -850],
        opacity: [0, 1],
        easing: 'easeOutQuad',
        duration: 2000,
        autoplay: false
    });
    animations.push(textAnimation);

    function updateAnimations() {
        const windowHeight = window.innerHeight;
        const dcElement = document.getElementById('dc');
        const dcRect = dcElement.getBoundingClientRect();
        const dcElement2 = document.getElementById('aniline');
        const dcR2 = dcElement2.getBoundingClientRect();
        const dcElement3 = document.getElementById('aniline2');
        const dcR3 = dcElement3.getBoundingClientRect();

        if (rightHand) {
            if (dcRect.top < windowHeight && dcRect.bottom > 0) {
                const visibilityRatio = 1 - (dcRect.top / windowHeight);

                animations.forEach(animation => {
                    animation.seek(animation.duration * Math.min(visibilityRatio, 1));
                });
            }
        }

        if (leftHand2) {
            if (dcR2.top < windowHeight && dcR2.bottom > 0) {
                const visibilityRatio = 1 - (dcR2.top / windowHeight);

                animations2.forEach(animation => {
                    animation.seek(animation.duration * Math.min(visibilityRatio, 1));
                });
            }
        }

        if (rightHand2) {
            if (dcR3.top < windowHeight && dcR3.bottom > 0) {
                const visibilityRatio = 1 - (dcR3.top / windowHeight);

                animations3.forEach(animation => {
                    animation.seek(animation.duration * Math.min(visibilityRatio, 1));
                });
            }
        }
        ticking = false;
    }

    window.addEventListener('scroll', () => {
        lastScrollY = window.scrollY;
        if (!ticking) {
            window.requestAnimationFrame(() => {
                updateAnimations();
                ticking = false;
            });
            ticking = true;
        }
    });
    updateAnimations();

    //* Public Animation
});

//!Miku Hearts

const he = document.getElementsByClassName('heart');
const ig = document.getElementById("aa");

function ah() {
    for (let i = 0; i < he.length; i++) {
        he[i].style.display = 'flex';
    }
    anime({
        targets: '.heart',
        translateX: function () {
            return anime.random(-80, 80);
        },
        translateY: function () {
            return anime.random(-40, 0);
        },
        duration: 2000,
        easing: 'easeInOutQuart',
        complete: ah,
        elasticity: 200,
    });

    ig.onclick = null;
}

//!Miku Hearts

