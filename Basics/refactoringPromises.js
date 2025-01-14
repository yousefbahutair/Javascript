const button = document.querySelector('button')

const moveBtn = ( Distance, Delay, element) => {
    const bodyWidth = document.body.clientWidth;
    const elRight = element.getBoundingClientRect().right;
    const currLeft = element.getBoundingClientRect().left;
    return new Promise((resolve,reject) => {
    setTimeout(() => {
    if(elRight + currLeft > bodyWidth){
        reject(currLeft, elRight);
    } else{
        element.style.transform = `translateX(${currLeft + Distance}px)`
        resolve();
    }}, Delay)})
}
moveBtn(500,3000,button)
.then(() => moveBtn(500, 3000, button))
.then(() => moveBtn(500, 3000, button))
.then(() => moveBtn(500, 3000, button))
.catch((height,width) => console.log(`Out of space ${height}px and ${width}px`))


