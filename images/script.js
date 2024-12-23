

document.addEventListener('mouseover', shake);
function shake(e){
    this.querySelectorAll('.shake').forEach(layer=>{
        const speed=layer.getAttribute('data-speed')
        
        const x = (window.innerWidth - e.pageX*speed)/120
        const y = (window.innerWidth - e.pageY*speed)/120
        
        layer.style.transform =    `translateX(${x}px) translateY(${y}px)`
    })
}

gsap.from('.logo', {opacity:0, duration:1, delay:2, y:10})
gsap.from('.navbar', '#nav-item', {opacity:0, duration:1, delay:2.1, y:30, stagger:0.2})

gsap.from('.title', {opacity:0, duration:1, delay:1.6, y:30})
gsap.from('.para', {opacity:0, duration:1, delay:1.8, y:30})
gsap.from('.home-btn', {opacity:0, duration:1, delay:2.1, y:30})
gsap.from('.home-img', {opacity:0, duration:1, delay:2.6, y:30})
