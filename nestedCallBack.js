const button = document.querySelector('button')

const moveX = (element, distance, delay,success,failure) => {
    setTimeout( () => {
    const bodyBoundary = document.body.clientWidth;
    const elRight = element.getBoundingClientRect().right;
    const elLeft = element.getBoundingClientRect().left;
    if((elRight + distance) > bodyBoundary){
         failure();
    }
    else {
        element.style.transform = `translateX(${elLeft + distance}px)`;
        success();
     }
},delay) }

moveX(button,
     100,
      1000,
      ()=>{
  moveX(button, 
    100,
    1000,
    () => {
    moveX(button,
        100000,
        1000,
        () => { alert("You Have A big sCreen")},
        ()=>{alert("NO SPACE HERE")},)
  },
  ()=>{alert("NO SPACE HERE")})
},
()=>{alert("NO SPACE HERE")})