const menuToggle = document.getElementById('menu-toggle')
const nav = document.getElementById('nav')
const slide = document.getElementById('slide')
const line1 = document.getElementById('line-1')
const line2 = document.getElementById('line-2')

menuToggle.addEventListener('click', function(){
    nav.classList.toggle('active')
    slide.classList.toggle('active')
    line1.classList.toggle('active')
    line2.classList.toggle('active')
})





const { gsap } = window;

const cursorOuter = document.querySelector(".cursor--large");
const cursorInner = document.querySelector(".cursor--small");
let isStuck = false;
let mouse = {
    x: -100,
    y: -100,
};

let SY = 0;
window.addEventListener('scroll', function(e) {
    SY = window.scrollY;
});

let cursorOuterOriginalState = {
    width: cursorOuter.getBoundingClientRect().width,
    height: cursorOuter.getBoundingClientRect().height,
};
const buttons = document.querySelectorAll(".magnet");

buttons.forEach((button) => {
    button.addEventListener("pointerenter", handleMouseEnter);
    button.addEventListener("pointerleave", handleMouseLeave);
});
window.addEventListener("mousemove", e => updateCursorPosition(e));
window.addEventListener("scroll", updateCursorPositionScroll);

document.body.addEventListener("pointerdown", () => {
    gsap.to(cursorInner, 0.15, {
        scale: 0.7,
    });
});
document.body.addEventListener("pointerup", () => {
    gsap.to(cursorInner, 0.15, {
        scale: 1,
    });
});
document.body.addEventListener("pointerdown", () => {
    gsap.to(cursorOuter, 0.15, {
        scale: 0.88,
    });
});
document.body.addEventListener("pointerup", () => {
    gsap.to(cursorOuter, 0.15, {
        scale: 1,
    });
});

function updateCursorPositionScroll() {
    if(lastScrolledTop !== window.scrollY){
        yMousePos -= lastScrolledTop;
        lastScrolledTop = window.scrollY;
        yMousePos += lastScrolledTop;
    }
    mouse.y = yMousePos;
}

let xMousePos = 0;
let yMousePos = 0;
let lastScrolledLeft = 0;
let lastScrolledTop = 0;

window.addEventListener("mousemove", e => captureMousePosition(e));

function captureMousePosition(event){
    xMousePos = event.pageX;
    yMousePos = event.pageY;
    window.status = "x = " + xMousePos + " y = " + yMousePos;
}

function updateCursorPosition(e) {
    mouse.x = e.pageX;
    mouse.y = e.pageY;
}

function updateCursor() {
    gsap.set(cursorInner, {
        x: mouse.x,
        y: mouse.y,
    });

    if (!isStuck) {
        gsap.to(cursorOuter, {
            duration: 0.15,
            x: mouse.x,
            y: mouse.y,
        });
    }

    requestAnimationFrame(updateCursor);
}

updateCursor();

function handleMouseEnter(e) {
    isStuck = true;
    const targetBox = e.currentTarget.getBoundingClientRect();
    gsap.to(cursorOuter, 0.2, {
        x: targetBox.left + targetBox.width / 2,
        y: (targetBox.top + targetBox.height / 2) + SY,
        width: targetBox.width,
        height: targetBox.width,
        borderRadius: 100,
        backgroundColor: "transparent",
    });
}

function handleMouseLeave(e) {
    isStuck = false;
    gsap.to(cursorOuter, 0.2, {
        width: cursorOuterOriginalState.width,
        height: cursorOuterOriginalState.width,
        borderRadius: "50%",
        backgroundColor: "transparent",
    });
}

const btn2019 = document.getElementById('btn-2019')
const btn2021 = document.getElementById('btn-2021')
const btn2024 = document.getElementById('btn-2024')

const box2019 = document.getElementById('box-2019')
const box2021 = document.getElementById('box-2021')
const box2024 = document.getElementById('box-2024')
console.log(document.getElementById('box-2019'))

btn2019.addEventListener('click', function(){
    box2019.classList.add('active')
    box2021.classList.remove('active')
    box2024.classList.remove('active')
})

btn2021.addEventListener('click', function(){
    box2021.classList.add('active')
    box2019.classList.remove('active')
    box2024.classList.remove('active')
})

btn2024.addEventListener('click', function(){
    box2024.classList.add('active')
    box2021.classList.remove('active')
    box2019.classList.remove('active')
})



const linkA = document.getElementsByTagName('a')
const cursor = document.getElementById('cursor')
for(const element in linkA) {
    linkA[element].addEventListener('mouseenter', function(){
        cursor.classList.add('exclude-cursor')
    })
    linkA[element].addEventListener('mouseleave', function(){
        cursor.classList.remove('exclude-cursor')
    })
};
