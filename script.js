const sliderContent = [
    "LuminaPad",
    "Samsung",
    "Apple",
    "Huawei",
    "Oppo",
    "Vivo",
    "Xiaomi",
    "Oppo",
    "Vivo",
    "Xiaomi",
];

let currentImageIndex = 2;
let currentContentIndex = 1;
const totalImages = 10;
let isAnimating = false;

function splitTextIntoSpans(selector) {
    let elements = document.querySelectorAll(selector);
    elements.forEach ((elements) => {
        let text = elements.innerText;
        let splitText = text
        .split("")
        .map(function (char) {
            return `<span>${char === "" ? "&nbsp ;&nbsp;" : char}</span>`;
        })
        .join("");
        elements.innerHTML = splitText;
    });
}

gsap.to(".slide-next-img", {
    clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    duration:1.5,
    ease:"power3.out",
    delay:1,
});

document.addEventListener("click", function () {
    if(isAnimating) return;
    
    isAnimating = true;

    splitTextIntoSpans(".slider-content-active h1");
    gsap.to(".slide-active img", {
        scale:2,
        duration:2,
        ease:"power3.out",
    });

    gsap.to(".slider-content-active h1 span", {
        top: "-175px",
        stagger: 0.05,
        ease:"power3.out",
        duration:0.5,
        onComplete: () => {
            gsap.to(".slider-content-active", {
                top: "-175px",
                duration:0.25,
                ease:"power3.out",
            });
        }
    });

    splitTextIntoSpans(".slider-content-next h1");
    gsap.set()
});


