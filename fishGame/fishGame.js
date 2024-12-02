function isTouching(a, b) {
    const aRect = a.getBoundingClientRect();
    const bRect = b.getBoundingClientRect();
    return !(
        aRect.top + aRect.height < bRect.top ||
        aRect.top > bRect.top + bRect.height ||
        aRect.left + aRect.width < bRect.left ||
        aRect.left > bRect.left + bRect.width
    );
}

const fish = document.querySelector('#fish');
const worm = document.querySelector('#worm');
let counter = 0
const count = document.querySelector('#count');
fish.style.top = fish.style.top || '100px';
fish.style.left = fish.style.left || '100px';

function moving(e) {
    const currentTop = position(fish.style.top);
    const currentLeft = position(fish.style.left);

    if (e.key === 'ArrowUp' || e.key === 'Up') {
        fish.style.top = subtraction(currentTop);
    } else if (e.key === 'ArrowDown' || e.key === 'Down') {
        fish.style.top = addition(currentTop)
    } else if (e.key === 'ArrowLeft' || e.key === 'Left') {
        fish.style.left = subtraction(currentLeft)
        fish.style.transform = 'scale(1, 1)';
    } else if (e.key === 'ArrowRight' || e.key === 'Right') {
        fish.style.left = addition(currentLeft)
        fish.style.transform = 'scale(-1, 1)';
    }

    if (isTouching(fish, worm)) {
        moveWorm();
        count.innerText = `${counter++}`;
        
    }
}
function addition(current){ // positve movements
    const currentValue =`${current + 50}px`;
    return currentValue;
}
function subtraction(current){ // negitive movements
    const currentValue =`${current - 50}px`;
    return currentValue;
}
function position(currentVal) { 
    if (!currentVal || currentVal === '') return 0;
    return parseInt(currentVal.slice(0, -2)); 
}

function moveWorm() {
    const x = Math.floor(Math.random() * (window.innerWidth - 70)); 
    const y = Math.floor(Math.random() * (window.innerHeight - 70));

    worm.style.position = 'absolute'; 
    worm.style.left = `${x}px`;
    worm.style.top = `${y}px`;


}

window.addEventListener('keyup', moving);
window.addEventListener('keydown',moving);