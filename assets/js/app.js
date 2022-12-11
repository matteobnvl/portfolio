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