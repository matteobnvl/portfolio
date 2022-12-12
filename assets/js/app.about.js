const btn2019 = document.getElementById('btn-2019')
const btn2021 = document.getElementById('btn-2021')
const btn2024 = document.getElementById('btn-2024')

const box2019 = document.getElementById('box-2019')
const box2021 = document.getElementById('box-2021')
const box2024 = document.getElementById('box-2024')

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