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

btn.forEach(c => {
    c.addEventListener('dblclick', () => {
        c.style.background = "#33e3f4";
    })
})

btn.forEach(e => {
    e.addEventListener('wheel', () => {
        e.style.color = "white";
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

colorNav.forEach(j => {
    j.addEventListener('click', (event) => {
        event.preventDefault();
    })
})

// colorNav.forEach(f => {
//     f.addEventListener('blur', () => {
//         f.style.color = "";
//     })
// })

// const img1 = document.querySelector('.img-content')


const color = document.querySelector('.content-destination')

color.addEventListener('mouseenter', function(event) {
        color.style.color= "orange";
})

// const eventStop = (event) => { event.stopPropagation() };

const head = document.querySelector('.container .logo-heading')

head.addEventListener('click', function(event) {
    head.style.color = "lightgray";
})