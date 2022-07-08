let speedUp = document.querySelector('.up1');
let speedDown = document.querySelector('.dwn');
let km = document.querySelector('.kilometrs')
let power = document.querySelector('.power')
let degreeUp = document.querySelector('.up2')
let degreeDown = document.querySelector('.dwn2')
let degreeTxt = document.querySelector('.degree')
let disks = document.querySelector('.disks')
let diskUp = document.querySelector('.up3')
let diskDown = document.querySelector('.dwn3')
let car = document.querySelector('.car')
let firstKm = 60

// SPEED 
speedUp.onclick = () => {
    let upsp = +speedUp.getAttribute('data-speed');
    firstKm = firstKm + upsp
    km.innerHTML = firstKm
    let pwr = power.getAttribute('data-power')
    power.innerHTML = power.innerHTML - +pwr
}
speedDown.onclick = () => {
    let upsp1 = +speedDown.getAttribute('data-speed');
    firstKm = firstKm - upsp1
    km.innerHTML = firstKm
    let pwr1 = +power.getAttribute('data-power')
    power.innerHTML = +power.innerHTML + pwr1
    if(firstKm === -1){
        firstKm = 0
    } 
}

// DEGREE 

degreeUp.onclick = () => {
     let getDeg = +degreeTxt.getAttribute('data-degree')
     degreeTxt.innerHTML = +degreeTxt.innerHTML + getDeg
}

degreeDown.onclick = () => {
     let getDeg2 = +degreeTxt.getAttribute('data-degree')
     degreeTxt.innerHTML = +degreeTxt.innerHTML - getDeg2
}

// DISKS

diskUp.onclick = () => {
     let getDeg = +disks.getAttribute('data-degree')
     disks.innerHTML = +disks.innerHTML + getDeg
}

diskDown.onclick = () => {
     let getDeg2 = +disks.getAttribute('data-degree')
     disks.innerHTML = +disks.innerHTML - getDeg2
   
}

// SWITCH

let switchBtn = document.querySelector('.switch')
let dot = document.querySelector('.dot')
switchBtn.onclick = () => {
    switchBtn.classList.toggle('active')
    dot.classList.toggle('active2')
    let pwr2 = +power.getAttribute('data-pwr')
    power.innerHTML = +power.innerHTML - pwr2    
}

let switchBtn2 = document.querySelector('.sw')
let dota = document.querySelector('.dt1')

switchBtn2.onclick = () => {
    switchBtn2.classList.toggle('active')
    dota.classList.toggle('active2')

}

// PORTAL

let wheels = document.querySelector('.wheels')
let wheel = document.querySelector('.wheel')
let portal = document.querySelector('.portal')
let cont = document.querySelector('.cont')
let box = document.querySelector('.box')
let items = document.querySelector('.item')
let first = document.querySelector('.first-it')
let second = document.querySelector('.second-it')
let thirth = document.querySelector('.thirth-it')
let button = document.querySelector('.new-btn')
let childBtn = document.querySelector('.child-btn')
let returnBack = document.querySelector('.back')
portal.onclick = () => {
    car.src = 'каринки/car_salon_black.jpg'
    car.style.height = '300px'
    car.style.marginTop = '50px'
    car.style.marginBottom = '100px'
    wheels.style.display = 'none'
    wheel.style.display = 'none'
    cont.style.display = 'none'
    box.style.display = 'flex'
    box.style.marginTop = '50px'
    first.style.border = '3px solid blue'
    returnBack.style.display = 'block'
    returnBack.style.marginTop = '30px'
}

second.onclick = () => {
    car.src = 'каринки/car_salon_silver.jpg'
    second.style.border = '3px solid blue'
    first.style.border = 'none'
    thirth.style.border = 'none'
}

first.onclick = () => {
    car.src = 'каринки/car_salon_black.jpg'
    thirth.style.border = 'none'
    first.style.border = '3px solid blue'
    second.style.border = 'none'
}

thirth.onclick = () => {
    car.src = 'каринки/car_salon_gold.jpg'
    second.style.border = 'none'
    thirth.style.border = '3px solid blue'
    first.style.border = 'none'
}

button.onclick = () => {
    button.classList.toggle('active3')
    childBtn.classList.toggle('active2')
}

returnBack.onclick = () => {
    box.style.display = 'none'
    wheels.style.display = 'block'
    wheel.style.display = 'block'
    cont.style.display = 'flex'
    car.src = 'каринки/car.jpg'
    car.style.height = '500px'
    car.style.marginTop = '0px'
    car.style.marginBottom = '0px'
    returnBack.style.display = 'none'
}