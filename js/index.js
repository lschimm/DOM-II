// Your code goes here
const btn = document.querySelectorAll('.btn')

btn.forEach(b => {
b.addEventListener('mouseover', () => {
    b.style.background = "#FFFFFF";
})
})

btn.forEach(c => {
    c.addEventListener('mouseleave', () => {
        c.style.background = "#00292d";
    })
})

const colorNav = document.querySelectorAll('.main-navigation .container .nav a')

colorNav.forEach(d => {
    d.addEventListener('mouseout', () => {
        d.style.color = "#33e3f4";
    })
})

colorNav.forEach(d => {
    d.addEventListener('drag', () => {
        d.style.color = "#d80000";
    })
})

colorNav.forEach(d => {
    d.addEventListener('pointerover', () => {
        d.style.color = "#56ffbb";
    })
})



// const img1 = document.querySelector(.'')