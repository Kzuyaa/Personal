document.addEventListener('DOMContentLoaded', () => {
    const rightHand = document.querySelector('.hand-right');
    const leftHand = document.querySelector('.hand-left');
    const leftHand2 = document.querySelector('.hand-left2');
    const mar = document.getElementById('mark')
    const nektext = document.getElementById('nekotext')
    const rightHand2 = document.querySelector('.hand-right2');
    const social = document.querySelector('.social-right');
    const heading = document.querySelector('h3');
    const whatif = document.getElementById('Whatismymotivationandpurpose');

    const animations = [];
    const animations2 = [];
    const animations3 = [];
    const animations4 = [];
    let lastScrollY = window.scrollY;
    let ticking = false;

    let screenWidth = window.innerWidth;
    window.addEventListener('resize', () => {
        screenWidth = window.innerWidth;
    });
    const rightStartX = screenWidth > 768 ? 1400 : 0;
    const leftStartX = screenWidth > 768 ? -1200 : -400;
    const leftStartX2 = screenWidth > 768 ? -400 : -200;
    const rightHand2StartX = screenWidth > 768 ? 1800 : 600;
    const nekotextStartX = screenWidth > 768 ? 800 : 200;
    const textX = screenWidth > 768 ? 1000 : 100;
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
        translateX: [rightStartX, 400],
        translateY: [400, -30],
        opacity: [0, 1],
        easing: 'easeOutQuad',
        duration: 2000,
        autoplay: false
    });
    animations.push(handAnimation);

    // Metin animasyonu
    const textAnimation = anime({
        targets: heading,
        translateY: [textX,0],
        translateX: [textX,0],
        opacity: [0, 1],
        easing: 'easeOutQuad',
        duration: 2000,
        autoplay: false
    });
    animations.push(textAnimation);

    const handAnimation3 = anime({
        targets: leftHand,
        translateX: [leftStartX,75],
        opacity: [0, 1],
        easing: 'easeOutQuad',
        duration: 2000,
        autoplay: false
    });
    animations.push(handAnimation3);

    const handAnimation4 = anime({
        targets: [leftHand2, mar],
        translateX: [leftStartX2, 200],
        opacity: [0, 1],
        easing: 'easeOutQuad',
        duration: 2000,
        autoplay: false
    });
    animations2.push(handAnimation4);

    const socialanimation = anime({
        targets: social,
        translateX: [rightHand2StartX, 0],
        opacity: [0, 1],
        easing: 'easeOutQuad',
        duration: 2000,
        autoplay: false
    });
    animations2.push(socialanimation);

    const handAnimation2 = anime({
        targets: rightHand2,
        translateX: [1800, 900],
        easing: 'easeOutQuad',
        duration: 2000,
        autoplay: false
    }); 
    animations3.push(handAnimation2);

    const nekotext = anime({
        targets: nektext,
 translateX: [nekotextStartX, -10],
        opacity: [0, 1],
        easing: 'easeOutQuad',
        duration: 2000,
        autoplay: false
    });
    animations3.push(nekotext);
    const items = whatif.querySelectorAll('aside');
    const last = anime({
        targets: items,
        opacity: [0, 1],
        scale: [0.5, 1],
        translateY: [100, 0],
        easing: 'easeOutQuad',
        duration: 2000,
        autoplay: false
    });
    animations4.push(last);

    function updateAnimations() {
        const windowHeight = window.innerHeight;
        const dcElement = document.getElementById('aniline4');
        const dcRect = dcElement.getBoundingClientRect();
        const dcElement2 = document.getElementById('aniline');
        const dcR2 = dcElement2.getBoundingClientRect();
        const dcElement3 = document.getElementById('aniline2');
        const dcR3 = dcElement3.getBoundingClientRect();
        const what = document.getElementById('aniline3');
        const tect = what.getBoundingClientRect()

        if (whatif) {
            if (tect.top < windowHeight && tect.bottom > 0) {
                const visibilityRatio = 1 - (tect.top / windowHeight);

                animations4.forEach(animation => {
                    animation.seek(animation.duration * Math.min(visibilityRatio, 1));
                });
            }
        }

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

//! Canvas Animation
const canvas = document.getElementById("bg-canvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

let pixels = [];

for (let i = 0; i < 200; i++) {
    pixels.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speed: Math.random() * 0.5 + 0.2,
        color: `hsl(${Math.random() * 360}, 100%, 70%)`
    });
}

function animatePixels() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let pixel of pixels) {
        ctx.beginPath();
        ctx.arc(pixel.x, pixel.y, pixel.size, 0, Math.PI * 2);
        ctx.fillStyle = pixel.color;
        ctx.fill();
        pixel.y += pixel.speed;
        if (pixel.y > canvas.height) {
            pixel.y = 0;
            pixel.x = Math.random() * canvas.width;
        }
    }
    requestAnimationFrame(animatePixels);
}
animatePixels();


//! Canvas Animation
